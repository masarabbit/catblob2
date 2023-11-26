
import { tiles } from './tiles2.js'


function init() {  
  
  // TODO test what happens if we add more tiles

  const elements = {
    wrapper: document.querySelector('.wrapper'),
    mapCover: document.querySelector('.map-cover'), 
    player: document.querySelector('.player'), 
    mapImage: document.querySelector('.map-image'),
    indicator: document.querySelector('.indicator'),
    cursor: document.querySelector('.cursor'),
    mapTiles: document.querySelector('.map-tiles'),
  }

  const randomN = max => Math.ceil(Math.random() * max)

  const decompress = arr =>{
    const output = []
    const input = arr.split(',')
    input.forEach(x =>{
      const letter = x.split('').filter(y => y * 0 !== 0).join('')
      const repeat = x.split('').filter(y => y * 0 === 0).join('') || 1
      for (let i = 0; i < repeat; i++){
        output.push(letter)
      }
    })
    return output
  }

  const player = {
    pos: 314,
    el: elements.player,
    sprite: document.querySelector('.player').childNodes[1].childNodes[1],
    walkingDirection: '',
    walkingInterval: '',
    pause: false,
    id: 'cb',
    d: 44,
  }

  const settings = {
    transitionTimer: null,
    isWindowActive: true,
    yOffset: 0,
    mapImage: {
      el: elements.mapImage.parentNode,
      canvas: elements.mapImage,
      ctx: elements.mapImage.getContext('2d'),
      x: 0, y: 0, w: 0, h: 0
    },
    map: {
      el: elements.mapCover, 
      w: 20, h: 20,
      d: 32,
      column: 20,
      row: 20,
      data: [],
      blocks: [],
    }, 
    cursor: {
      el: elements.cursor,
      x: 0, y: 0,
    },
  }

  const mapX = i => i % settings.map.column
  const mapY = i => Math.floor(i / settings.map.column)
  const getMapCoord = para => (Math.floor(settings.map[para] / 2) - 1) * settings.map.d
  const clampMax = (n, max) =>  n < max ? n : max
  const px = n => `${n}px`
  const setPos = ({ el, x, y }) => Object.assign(el.style, { left: `${x}px`, top: `${y}px` })
  const setStyles = ({ el, x, y, w, h, d }) => {
    const m = d || 1
    if (w) el.style.width = px(w * m)
    if (h) el.style.height = px(h * m)
    el.style.transform = `translate(${x ? px(x) : 0}, ${y ? px(y) : 0})`
  }
  const isNum = x => typeof x === 'number'
  // const nearestN = (n, denom) => n === 0 ? 0 : (n - 1) + Math.abs(((n - 1) % denom) - denom)


  const adjustMapWidthAndHeight = () =>{
    const { offsetWidth: w, offsetHeight: h } = elements.wrapper
    const { d } = settings.map
  
    settings.map.w = 2 * Math.floor((clampMax(w, 800) / d) / 2)
    settings.map.h = 2 * Math.floor((clampMax(h, 600) / d) / 2)
    setStyles(settings.map)
  
    const x = getMapCoord('w')
    const y = getMapCoord('h')
    
    setPos({ el: elements.player, x, y })

    // adjust mapPosition
    settings.mapImage.x = mapX(player.pos) * -d + x
    settings.mapImage.y = mapY(player.pos) * -d + y
    setStyles(settings.mapImage)
    
    settings.mapImage.el.classList.add('transition')
    clearTimeout(settings.transitionTimer)
    settings.transitionTimer = setTimeout(()=> {
      settings.mapImage.el.classList.remove('transition')
    }, 500)
  }
  
  const setUpCanvas = ({ canvas, w, h, ctx }) => {
    canvas.setAttribute('width', w)
    canvas.setAttribute('height', h || w)
    ctx.imageSmoothingEnabled = false
  }

  // const outputMap = ({ i, tile }) => {
  //   const { d } = settings.map
  //   settings.mapImage.ctx.fillStyle = tile === '$' ? '#a2fcf0' : '#2e1a66'
  //   settings.mapImage.ctx.fillRect(mapX(i) * d, mapY(i) * d, d, d)
  // }

  const placeTile = ({ tileId, i, fill }) => {
    const { d } = settings.map
    const index = tiles.indexOf(tiles.find(t => t.id === tileId))
    const tileX = (index % 10) * 16
    const tileY = Math.floor(index / 10) * 16
    const x = mapX(i) * d
    const y = mapY(i) * d
    if (fill) {
      settings.mapImage.ctx.fillStyle = '#2e1a66'
      settings.mapImage.ctx.fillRect(x, y, d, d)
    }
    settings.mapImage.ctx.drawImage(elements.mapTiles, 
      tileX, tileY,
      16, 16,
      x, y,
      d, d)
  }

  const setupMap = () => {
    const { d, column, row } = settings.map
    const mapLength = column * row
    const wallPercentage = Math.round(mapLength * 0.2)
    settings.map.data = new Array(mapLength).fill('').map((_, i) => {
      return (i < wallPercentage) ? '$' : 'x'
    }).sort(() => Math.random() - 0.5)
    settings.mapImage.w = column * d
    settings.mapImage.h = row * d

    setUpCanvas(settings.mapImage)

    settings.map.data = settings.map.data.map((t, i) => {
      if ([0, column - 1].includes(mapX(i)) || [0, row - 1].includes(mapY(i))) return '$'

      return t
    })

    settings.map.data.forEach((t, i) => {
      const checkDir = dir => settings.map.data?.[i + dir] !== 'x' ? 'o' : 'x'
      const criteria = [-column, 1, column, -1].reduce((acc, d) => acc + checkDir(d), '')
      const criteria2 = [column + 1, column - 1].reduce((acc, d) => acc + checkDir(d), '')
    
      const matchingTile = tiles.find(tile => {
        if (tile.criteria2) {
          return tile.criteria.includes(criteria) && tile.criteria2.includes(criteria2)
        } 
        return tile.criteria.includes(criteria)
      })


      const block = {
        el: Object.assign(document.createElement('div'), { 
          className: `block ${criteria} ${criteria2} ${matchingTile?.id || 'missing'} ${t}`,
          innerHTML: i
        }),
        x: mapX(i) * d,
        y: mapY(i) * d
      }
      setPos(block)
      settings.mapImage.el.appendChild(block.el)

      if (!matchingTile) console.log(criteria, criteria2)
      placeTile({
        tileId: t === 'x' ? 'floor' : matchingTile.id,
        i,
        fill: true,
      })

      if (t === '$') {
        if (criteria[0] === 'o' && criteria[3] === 'x' && checkDir(-(column + 1)) === 'o') {
          placeTile({ tileId: 'top_dot', i })
        }
        if (criteria.slice(0,2) === 'ox' && checkDir(-(column - 1)) === 'o') {
          placeTile({ tileId: 'top_dot_h', i })
        }
        if (criteria.slice(-2) === 'ox' && criteria2[1] === 'o') placeTile({ tileId: 'bottom_dot', i })
        if (criteria.slice(1,3) === 'xo' && criteria2[0] === 'o') placeTile({ tileId: 'bottom_dot_h', i })
      }
    })

    const tilesWithNoWalls = settings.map.data.map((t, i) => t === 'x' && i).filter(t => t)

    player.pos = tilesWithNoWalls[randomN(tilesWithNoWalls.length - 1)]
  
    adjustMapWidthAndHeight()
  }


  const noWall = pos =>{    
    const { map: { data, blocks }, npcs } = settings
    // console.log('walk data', !data[pos])
    // console.log('block data', blocks[pos])
    // console.log('player pos data', player.pos === pos)
    if (!data[pos] || blocks[pos] || player.pos === pos) return false
    return settings.map.data[pos] !== '$'
    // return true
  }

  const handleWalk = dir => {
    if (player.walkingDirection !== dir){
      clearInterval(player.walkingInterval)
      player.walkingDirection = dir
      player.walkingInterval = setInterval(()=>{
        player.walkingDirection
          ? walk({ actor: player, dir })
          : clearInterval(player.walkingInterval)
      }, 150)
    }
  }

  const getWalkConfig = dir => {
    const { column , d } = settings.map
    return {
      right: { diff: 1, para: 'x', dist: -d },
      left: { diff: -1, para: 'x', dist: d },
      up: { diff: -column, para: 'y', dist: d },
      down: { diff: column, para: 'y', dist: -d }
    }[dir] 
  }
  
  const walk = ({ actor, dir }) => {
    if (!dir || player.pause) return
    const { diff, para, dist } = getWalkConfig(dir) 

    turnSprite({ actor: player, diff })
    if (noWall(actor.pos + diff)) {
      if (actor === player) { // TODO may not require this if this is only used for player
        settings.mapImage[para] += dist
        setStyles(settings.mapImage)
        player.pos += diff
        elements.indicator.innerHTML = `pos:${player.pos} dataX:${mapX(player.pos)} dataY:${mapY(player.pos)}`
      } 
    }
  }

  const handleKeyAction = e => {
    const key = e.key ? e.key.toLowerCase().replace('arrow','') : e
    if (e.key && e.key[0] === 'A') handleWalk(key)
  }

  const turnSprite = ({ actor, diff, newPos = 0 }) => {
    const { column } = settings.map
    const { pos, sprite: el, d } = actor
    const pDiff = diff || newPos - pos 

    if (pDiff === -1) { // left
      setPos({ el, x: -d })
      actor.el.classList.remove('flip')
    }
    if (pDiff === 1) { // right
      setPos({ el, x: -d })
      actor.el.classList.add('flip')
    }
    if (pDiff === -column) setPos({ el, x: -d * 2 }) // down
    if (pDiff === column) setPos({ el, x: 0 }) // up
  } 

  setupMap()


  window.addEventListener('focus', ()=> settings.isWindowActive = true)
  window.addEventListener('blur', ()=> settings.isWindowActive = false)
  
  window.addEventListener('resize', adjustMapWidthAndHeight)
  window.addEventListener('keyup', () => {
    player.walkingDirection = null
    clearInterval(player.walkingInterval)
  })
  window.addEventListener('keydown', handleKeyAction)


  // const testA = ['a', 'b', 'c']
  // const testB = ['a', 'b', 'd']

  // console.log(testA.map(t => testB.includes(t) && t))
  // console.log('test', 'abcd'.slice(0,2))
}

window.addEventListener('DOMContentLoaded', init)



