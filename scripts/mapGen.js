
import { tiles } from './tiles.js'


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
    pos: 0,
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

  const setupMap = () => {
    const { d, column, row } = settings.map
    settings.map.data = new Array(column * row).fill('')
    settings.mapImage.w = column * d
    settings.mapImage.h = row * d

    setUpCanvas(settings.mapImage)
    adjustMapWidthAndHeight()

    const drawnTiles = []

    // randomly draw tiles
    // settings.map.data.forEach((_tile, i) => {
    //   if (randomN(30) > 29) {
    //     const index = randomN(4) - 1
    //     drawnTiles[i] = tiles[index]
    //     const tileX = (index % 10) * 16
    //     const tileY = Math.floor(index / 10) * 16
    //     settings.mapImage.ctx.drawImage(elements.mapTiles, 
    //       tileX, tileY,
    //       16, 16,
    //       mapX(i) * d, mapY(i) * d, 
    //       d, d)
    //     }
    // })

    const placeTile = (tileId, i) => {
      console.log(tiles.find(t => t.id === tileId))
      const index = tiles.find(t => t.id === tileId)
      // const index = 1
      drawnTiles[i] = tiles.find(t => t.id === tileId)
      const tileX = (index % 5) * 16
      const tileY = Math.floor(index / 5) * 16
      settings.mapImage.ctx.drawImage(elements.mapTiles, 
        tileX, tileY,
        16, 16,
        mapX(i) * d, mapY(i) * d, 
        d, d)
    }

    // const randomI = randomN(settings.map.data.length / 2)
    // placeTile(314)
    placeTile('r_corner', randomN(settings.map.data.length) - 1)
    placeTile('r_corner_h', randomN(settings.map.data.length) - 1)
    placeTile('l_corner', randomN(settings.map.data.length) - 1)
    placeTile('l_corner_h', randomN(settings.map.data.length) - 1)

    // check 4 directions and draw possible tile
    // ? right now doesn't consider when tiles have multiple neighbours...

    // Shouldn't be looping through drawnTiles, should be looping through tiles due to be drawn on next to drawnTiles.
    // Need way to create list using two arrays - find tile that us present in both.
    
    const tilesToDraw = []

    // Repeat while tilesToDraw has blank tiles
    let count = 0
    //drawnTiles.length !== settings.map.data.length
    // drawnTiles.filter(t=>t).length !== settings.map.data.length
    while (drawnTiles.filter(t=>!t.length).length !== settings.map.data.length) {
      count++
      drawnTiles.forEach((tile, i) => {
        if (tile) {
          [-column, 1, column, -1].forEach((dir, dI) => {
            const possibleTiles = tile[['up', 'right', 'down', 'left'][dI]]
            
            // only check tiles that are actually next to each other
            if (
              drawnTiles[i + dir] ||
              (i + dir) > (settings.map.data.length - 1) ||
              (i + dir) < 0 || 
              ([1, -1].includes(dir) && (mapY(i) !== mapY(i + dir))) || 
              ((dir === column) && mapY(i + dir) > settings.map.row)
              ) return
  
            // ensure tiles meet all requirement
            const existingPossibleTiles = tilesToDraw[i + dir]
            if (existingPossibleTiles?.length) {
              tilesToDraw[i + dir] = possibleTiles.map(t => existingPossibleTiles.includes(t) && t).filter(t => t)
            } else if (possibleTiles.length) {
              tilesToDraw[i + dir] = possibleTiles
            }
            

  
            // if (noWall(i + dir)) {
            //   const block = {
            //     el: Object.assign(document.createElement('div'), { 
            //       className: `block ${possibleTiles.join(' ')}`,
            //       innerHTML: i + dir
            //     }),
            //     x: mapX(i + dir) * d,
            //     y: mapY(i + dir) * d
            //   }
            //   setPos(block)
            //   settings.map.blocks[i + dir] = block
            //   settings.mapImage.el.appendChild(block.el)
            // }
          })
        }
      })
  
      // console.log('testtest', tilesToDraw)

      const lowestPossibilityCount = tilesToDraw.map((t, dI) => !drawnTiles[dI] && t.length).filter(t => t).sort((a, b) => a - b)[0]
      if (!lowestPossibilityCount) console.log('check low', lowestPossibilityCount)
      if (!lowestPossibilityCount && lowestPossibilityCount !== 0) return 
      //lowestPossibilityCount not working as intended

      // draw tiles to draw based on possible tiles
      tilesToDraw.forEach((tile, dI) => {
        // && (tile.length === lowestPossibilityCount)
        if (tile?.length === 0) {
          tile = ['floor']
          console.log('overwrite', dI)
          if (noWall(dI)) {
            const block = {
              el: Object.assign(document.createElement('div'), { 
                className: `block`,
                innerHTML: dI
              }),
              x: mapX(dI) * d,
              y: mapY(dI) * d
            }
            setPos(block)
            settings.map.blocks[dI] = block
            settings.mapImage.el.appendChild(block.el)
          }
        }
        if (tile?.length && ((tile.length === lowestPossibilityCount) || (tile.length === 1 && tile[0] === 'floor'))) {
          const tileId = tile[Math.floor(Math.random() * tile.length)]
  
          const tI = tiles.findIndex(t => t.id === tileId) 
          const tileX = (tI % 5) * 16
          const tileY = Math.floor(tI / 5) * 16

          // console.log('test', count, drawnTiles[dI])
          if (!drawnTiles[dI] && tiles[tI]) {
            drawnTiles[dI] = tiles[tI]
            setTimeout(()=> {
              settings.mapImage.ctx.drawImage(elements.mapTiles, 
                tileX, tileY,
                16, 16,
                mapX(dI) * d, mapY(dI) * d, 
                d, d
              )

              // if (noWall(dI)) {
              //   const block = {
              //     el: Object.assign(document.createElement('div'), { 
              //       className: `block ${tiles[tI]}`,
              //       innerHTML: dI
              //     }),
              //     x: mapX(dI) * d,
              //     y: mapY(dI) * d
              //   }
              //   setPos(block)
              //   settings.map.blocks[dI] = block
              //   settings.mapImage.el.appendChild(block.el)
              // }
            }, count * 200)
          } else if (!tiles[tI]) {
            console.log('check fail')
          }
          
        
        } else {
          tilesToDraw[dI] = null
        }
      })
      console.log('tilesToDraw', count, tilesToDraw)
      console.log('drawnTiles', count, drawnTiles)
    }




    // setTimeout(()=> {
    //   drawnTiles.forEach((tile, i) => {
    //     if (tile) {
    //       ;['up', 'right', 'down', 'left'].forEach((dir, dI) => {
    //         const tileId = tile[dir][Math.floor(Math.random() * tile[dir].length)]
    //         const tI = tiles.findIndex(t => t.id === tileId) 

    //         const tileX = (tI % 10) * 16
    //         const tileY = Math.floor(tI / 10) * 16
    //         const offset = [-column, 1, column, -1][dI]
    //         drawnTiles[i + offset] = tiles[tI]
  
    //         settings.mapImage.ctx.drawImage(elements.mapTiles, 
    //           tileX, tileY,
    //           16, 16,
    //           mapX(i + offset) * d, mapY(i + offset) * d, 
    //           d, d
    //         )
    //       })
    //     }
    //   })
    // }, 1000)

  
  }


  const noWall = pos =>{    
    // const { map: { data, blocks }, npcs } = settings
    // if (!data[pos] || blocks[pos] || player.pos === pos) return false
    // return settings.map.data[pos] !== '$'
    return true
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
}

window.addEventListener('DOMContentLoaded', init)



