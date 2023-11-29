

function init() {  
  
  // TODO refactor to simplify functions?
  // TODO update sprites or map to make them clearer
  // TODO add some kind of logic to prevent sprites and/or player to be trapped
  // TODO add some kind of logic to reset everything (make reset button first)
  // TODO update someway to keep score
  // TODO add some way to end game when life reaches 0

  const tiles = [
    {
      id: 'h_edge',
      criteria: ['xoxx']
    },
    {
      id: 'h',
      criteria: ['xoxo', 'ooxo']
    },
    {
      id: 't_joint_down',
      criteria: ['xooo','oooo'],
      criteria2: ['xx']
    },
    {
      id: 'h_edge_h',
      criteria: ['xxxo']
    },
    {
      id: 'v_up_edge',
      criteria: ['xxox']
    },
    {
      id: 'l_corner',
      criteria: ['ooxx']
    },
    {
      id: 'l_corner_h',
      criteria: ['oxxo']
    },
    {
      id: 'r_corner',
      criteria: ['xoox'],
      criteria2: ['xx','xo']
    },
    {
      id: 'r_corner_h',
      criteria: ['xxoo'],
      criteria2: ['xx','ox']
    },
    {
      id: 'v',
      criteria: ['oxox']
    },
    {
      id: 'dot',
      criteria: ['xxxx']
    },
    {
      id: 'v_down_edge',
      criteria: ['oxxx']
    },
    {
      id: 'block_edge',
      criteria: ['ooox'],
      criteria2: ['oo', 'ox']
    },
    {
      id: 'block_edge_h',
      criteria: ['oxoo'],
      criteria2: ['oo','xo']
    },
    {
      id: 'block',
      criteria: ['oooo','xooo'],
      criteria2: ['oo']
    },
    {
      id: 'block_corner',
      criteria: ['xoox'],
      criteria2: ['oo','ox']
    },
    {
      id: 'block_corner_h',
      criteria: ['xxoo'],
      criteria2: ['xo','oo']
    },
    {
      id: 'block_r_joint',
      criteria: ['oooo','xooo'],
      criteria2: ['xo']
    },
    {
      id: 'block_r_joint_h',
      criteria: ['oooo','xooo'],
      criteria2: ['ox']
    },
    {
      id: 'block_edge_r_joint',
      criteria: ['ooox'],
      criteria2: ['xo','xx']
    },
    {
      id: 'block_edge_r_joint_h',

      criteria: ['oxoo'],
      criteria2: ['ox','xx']
    },
    {
      id: 'top_left_corner',
    },
    {
      id: 'top_right_corner',
    },
    {
      id: 'bottom_left_corner',
    },
    {
      id: 'bottom_right_corner',
    },
    {
      id: 'top_dot',
    },
    {
      id: 'top_dot_h',
    },
    {
      id: 'bottom_dot',
    },
    {
      id: 'bottom_dot_h',
    },
    {
      id: 'floor',
    },
  ]
  
  const elements = {
    wrapper: document.querySelector('.wrapper'),
    mapCover: document.querySelector('.map-cover'), 
    player: document.querySelector('.player'), 
    mapImage: document.querySelector('.map-image'),
    indicator: document.querySelector('.indicator'),
    cursor: document.querySelector('.cursor'),
    mapTiles: document.querySelector('.map-tiles'),
    arrows: document.querySelectorAll('.arrow'),
  }

  const player = {
    pos: 314,
    el: elements.player,
    sprite: document.querySelector('.player').childNodes[1].childNodes[1],
    walkingDirection: '',
    walkingInterval: '',
    pause: false,
    id: 'catblob',
    d: 44,
    life: {
      el: document.querySelector('.life'),
      w: 180,
      point: 9,
    },
    invincible: false,
    invincibleCount: 0,
  }

  const npcObj = {
    x: 0,
    y: 0,
    goal: 0,
    carryOn: true,
    delay: 10,
    pause: false,
  }

  const dogBlobObj = {
    id: null,
    pos: 100,
    d: 44,
    chaseTarget: player,
    attackDir: null,
    isHunting: true,
  }

  const mouseBlobObj = {
    id: 'mouse',
    pos: 200,
    d: 36,
    chaseTarget: null,
    runAwayTarget: player,
    isHunting: false,
    isFleeing: true,
  }

  const settings = {
    transitionTimer: null,
    isWindowActive: true,
    yOffset: 0,
    npcs: [],
    mapImage: {
      el: elements.mapImage.parentNode,
      canvas: elements.mapImage,
      ctx: elements.mapImage.getContext('2d'),
      x: 0, y: 0, w: 0, h: 0
    },
    map: {
      el: elements.mapCover, 
      w: 30, h: 20,
      d: 32,
      column: 30,
      row: 20,
      data: [],
      spheres: [],
    }, 
    cursor: {
      el: elements.cursor,
      x: 0, y: 0,
    },
    controlTimer: null
  }

  const mapX = i => i % settings.map.column
  const mapY = i => Math.floor(i / settings.map.column)
  const getMapCoord = para => (Math.floor(settings.map[para] / 2) - 1) * settings.map.d
  const clampMax = (n, max) =>  n < max ? n : max
  const isNum = x => typeof x === 'number'
  const px = n => `${n}px`
  const setPos = ({ el, x, y }) => Object.assign(el.style, { left: `${x}px`, top: `${y}px` })
  const setStyles = ({ el, x, y, w, h, d }) => {
    const m = d || 1
    if (isNum(w)) el.style.width = px(w * m)
    if (isNum(h)) el.style.height = px(h * m)
    el.style.transform = `translate(${x ? px(x) : 0}, ${y ? px(y) : 0})`
  }
  const nearestN = (n, denom) => n === 0 ? 0 : (n - 1) + Math.abs(((n - 1) % denom) - denom)
  const randomN = max => Math.ceil(Math.random() * max)
  const sphereState = ['cracked', 'cracked-more', 'cracked-even-more', 'shattered']

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

  const placeTile = ({ tileId, i }) => {
    const { d } = settings.map
    const index = tiles.indexOf(tiles.find(t => t.id === tileId))
    const tileX = (index % 10) * 16
    const tileY = Math.floor(index / 10) * 16
    const x = mapX(i) * d
    const y = mapY(i) * d
    settings.mapImage.ctx.drawImage(elements.mapTiles, 
      tileX, tileY,
      16, 16,
      x, y,
      d, d)
  }

  const setupMap = () => {
    const { d, column, row } = settings.map
    // settings.map.data = decompress('$14,2,$17,8,$2,8,$7,1,$4,8,$2,5,$2,1,$3,1,$3,1,$2,5,$2,10,$2,9,$2,4,$4,16,$2,2,$2,4,$4,16,$2,2,$2,4,$6,18,$2,4,$6,18,$4,2,$4,20,$4,2,$1,1,$2,20,$2,28,$2,28,$2,28,$15,1,$29,1,$29,1,$135').map(t => t ||'x')
    const mapLength = column * row
    const wallPercentage = Math.round(mapLength * 0.2)

    settings.map.data = new Array(mapLength).fill('').map((_, i) => {
      return (i < wallPercentage) ? '$' : 'x'
    }).sort(() => Math.random() - 0.5)
    settings.mapImage.w = column * d
    settings.mapImage.h = row * d

    setUpCanvas(settings.mapImage)

    settings.mapImage.ctx.fillStyle = '#2e1a66'
    settings.mapImage.ctx.fillRect(0, 0, settings.mapImage.w, settings.mapImage.h)

    // add wall around edge
    settings.map.data = settings.map.data.map((t, i) => {
      if ([0, column - 1].includes(mapX(i)) || [0, row - 1].includes(mapY(i))) return '$'
      return t
    })

    settings.map.data.forEach((t, i) => {
      const checkDir = dir => settings.map.data?.[i + dir] === 'x' ? 'x' : 'o'
      const criteria = [-column, 1, column, -1].reduce((acc, d) => acc + checkDir(d), '')
      const criteria2 = [column + 1, column - 1].reduce((acc, d) => acc + checkDir(d), '')
    
      const matchingTile = tiles.find(tile => {
        return tile.criteria2
          ? tile.criteria.includes(criteria) && tile.criteria2.includes(criteria2)
          : tile.criteria.includes(criteria)
      })

      if (!matchingTile) console.log(criteria, criteria2)

      if (matchingTile.id === 'dot' && randomN(10) === 10) {
        const x = mapX(i) * d
        const y = mapY(i) * d
        const sphere = {
          el: Object.assign(document.createElement('div'), { 
            className: 'sphere',
          }),
          x, y,
          state: 0
        }
        setPos(sphere)
        settings.mapImage.el.appendChild(sphere.el)
        settings.map.spheres[i] = sphere
      } else {
        placeTile({
          tileId: t === 'x' ? 'floor' : matchingTile.id,
          i,
        })
      }

      // round off edges
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
      
      // update corner
      const d2 = d / 2
      if (i === 0) {
        settings.mapImage.ctx.clearRect(0, 0, d2, d2)
        placeTile({ tileId: 'top_left_corner', i }) 
      } 
      if (i === column - 1) {
        settings.mapImage.ctx.clearRect((column * d) - d2, 0, d2, d2)
        placeTile({ tileId: 'top_right_corner', i }) 
      } 
      if (i === (mapLength - column)) {
        settings.mapImage.ctx.clearRect(0, (row * d) - d2, d2, d2)
        placeTile({ tileId: 'bottom_left_corner', i }) 
      } 
      if (i === (mapLength - 1)) {
        settings.mapImage.ctx.clearRect((column * d) - d2, (row * d) - d2, d2, d2)
        placeTile({ tileId: 'bottom_right_corner', i }) 
      } 
    })

    const tilesWithNoWalls = settings.map.data.map((t, i) => t === 'x' && i).filter(t => t)
    player.pos = tilesWithNoWalls[randomN(tilesWithNoWalls.length - 1)]
    // TODO there's nothing to stop dogs and mouses from appearing too close or in same spot as player
    settings.npcs.forEach(npc => npc.pos = tilesWithNoWalls[randomN(tilesWithNoWalls.length - 1)])
    adjustMapWidthAndHeight()
  }

  const defaultPathMemory = arr => arr.map(()=> {
    return {
      searched: false,
      prev: null
    }
  })

  const distance = (a, b) => Math.abs(mapX(a) - mapX(b)) + Math.abs(mapY(a) - mapY(b))

  const chainMotion = ({ npc, route, index }) => {
    const newPos = route[index]
    const { column } = settings.map

    // This bit ensures npc doesn't stay in one place when it get's trapped
    npc.track.push(newPos)
    npc.track = npc.track.slice(-9)
    if (npc.track.filter(cell => cell === newPos).length > 4) {
      npc.isHunting = false
      npc.track.length = 0

      // TODO npc identifies wall close by and attacks it
      const wallCloseBy = [npc.pos + 1, npc.pos - 1, npc.pos + column, npc.pos - column].find(p => settings.map.spheres[p])
      if (wallCloseBy) {
        clearTimeout(npc.motionTimer)
        npc.el.classList.add('attacking')
        npc.attackDir = Math.abs(npc.pos - wallCloseBy) === 1 ? 'horizontal' : 'vertical'
        npc.el.classList.add(npc.attackDir)
        turnSprite({ actor: npc, newPos: wallCloseBy })

        const sphere = settings.map.spheres[wallCloseBy]
        let attackSphere
        attackSphere = setInterval(()=> {
          sphere.el.classList.add(sphereState[sphere.state])
          sphere.state += 1
          if (sphere.state === 5 || !settings.map.spheres[wallCloseBy]) {
            clearInterval(attackSphere)
            npc.el.classList.remove('attacking')
            npc.el.classList.remove(npc.attackDir)
            npc.isHunting = true
            npc.pause = false
            triggerNpcMotion(npc)
            if (settings.map.spheres[wallCloseBy]) {
              settings.mapImage.el.removeChild(sphere.el)
              settings.map.spheres[wallCloseBy] = null
            }
          }
        }, 400)
      
        npc.pause = true
        return
      }
    } else if (npc.track.length > 4) {
      npc.isHunting = true
    }

    if (settings.map.spheres[newPos]) {
      triggerNpcMotion(npc)
      return
    } 

    moveNpc({ npc, newPos })
    if (npc.pos === npc.goal || index + 1 >= route.length) {      
      clearTimeout(npc.motionTimer)
      console.log('goal')
    } else {
      npc.motionTimer = setTimeout(()=>{
        chainMotion({ npc, route, index: index + 1 })
      }, 500)
    }
  }

  const selectPath = ({ character, current }) =>{
    character.route.push(current)
    if (character.searchMemory[current].prev) {
      selectPath({ 
        character, 
        current: character.searchMemory[current].prev 
      })
    } else {
      chainMotion({
        npc: character,
        route: character.route.reverse(),
        index: 0
      })
    }
  }


  const avoidPlayer = npc => {
    const { pos: p } = npc
    const { column: w } = settings.map
    let motion = [ 1, -1, w, -w ]
    const target = npc.runAwayTarget
    if (!target) return
    const checkAndRemoveDir = ({ arr, dir }) => {
      if (arr.includes(target.pos)) {
        motion = motion.filter(option => option !== dir)
      }
    }
    ;[
      {
        arr: [p + 1, p + 2, p + 3, p + 1 - w, p + 1 + w],
        dir: 1,
      },
      {
        arr: [p - 1, p - 2, p - 3, p - 1 - w, p - 1 + w],
        dir: -1,
      },
      {
        arr:[p - w, p - (2 * w), p - (3 * w), p - w - 1, p - w + 1],
        dir: -w,
      },
      {
        arr: [p + w, p + (2 * w), p + (3 * w), p + w - 1, p + w + 1],
        dir: w,
      },
    ].forEach(config => checkAndRemoveDir(config))

    motion.push(npc.x > target.x ? 1 : -1)
    motion.push(npc.y > target.y ? w : -w)
    motion = motion.filter(pos => noWall({ pos: npc.pos + pos }))

    // TODO need something here to ensure there's way out?
    if (motion.length) moveNpc({ npc, newPos:npc.pos + (motion[Math.floor(Math.random() * motion.length)]) })
  }

  const decideNextMove = ({ character, current, count }) =>{
    const { pos, goal, searchMemory } = character
    const { column: w } = settings.map
    if (!character.carryOn) return
    const possibleDestination = [1, -1, -w, w].map(d => d + current)
    if (!possibleDestination.some(c => c === goal)) {
      const mapInfo = []
      possibleDestination.forEach(cell =>{  
        if (noWall({ pos:cell, ignoreSphere: true }) && !searchMemory[cell].searched && cell !== pos) {
          mapInfo.push({ 
            cell, 
            prev: current, 
            distanceToGoal: distance(goal, cell) 
          })
        }
      })
      const minValue = Math.min(...mapInfo.map(c => c.distanceToGoal))
      mapInfo.filter(c => c.distanceToGoal === minValue).forEach(c =>{
        character.searchMemory[c.cell].searched = true 
        character.searchMemory[c.cell].prev = current 
        decideNextMove({ 
          character, 
          current: c.cell, 
          count: count + 1 
        })
      })
    } else {
      character.carryOn = false
      character.searchMemory[goal].prev = current
      clearTimeout(character.motionTimer)
      selectPath({ character, current: goal })
    }  
  }

  const triggerNpcMotion = npc => {
    if (!settings.isWindowActive) return
    clearTimeout(npc.motionTimer)
    const target = npc.chaseTarget
    if (npc.pause || npc.pos === target?.pos) return
    npc.searchMemory = defaultPathMemory(settings.map.data)
    npc.carryOn = true
    if (target) npc.goal = target.pos
    decideNextMove({ character: npc, current: npc.pos })
  }
  

  // TODO enable cat and mouse to be in the same spot, but not mouse and dog
  const noWall = ({ pos, ignoreSphere }) =>{    
    const { map: { data, spheres }, npcs } = settings
    if (!data[pos] || (!ignoreSphere && spheres[pos]) || player.pos === pos 
      // || npcs.some(npc => npc.pos === pos)
      ) return false
    return settings.map.data[pos] !== '$'
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
    if (noWall({ pos: actor.pos + diff })) {
      if (actor === player) { // TODO may not require this if this is only used for player
        settings.mapImage[para] += dist
        setStyles(settings.mapImage)
        player.pos += diff
        elements.indicator.innerHTML = `pos:${player.pos} dataX:${mapX(player.pos)} dataY:${mapY(player.pos)}`
      } 
    }
    settings.npcs.forEach(npc => {
      if (!npc.isHunting && !npc.isFleeing) triggerNpcMotion(npc)
    })
  }

  const handleKeyAction = e => {
    const key = e.key ? e.key.toLowerCase().replace('arrow','') : e
    if (e.key && e.key[0] === 'A') handleWalk(key)
    if (['top', 'right', 'bottom', 'left'].includes(e)) handleWalk(e)
  }

  const placeSphere = () => {
    const { d, column } = settings.map
    const { x, y } = settings.cursor
    const { left, top } = settings.mapImage.canvas.getBoundingClientRect()
    const drawPos = {
      x: x - left + window.scrollX,
      y: y - top + window.scrollY
    }
    const index = (((drawPos.y) / d) * column) + drawPos.x / d

    if (noWall({ pos: index })) {
      const sphere = {
        el: Object.assign(document.createElement('div'), { className: 'sphere' }),
        x: drawPos.x,
        y: drawPos.y,
        state: 0
      }
      setPos(sphere)
      settings.map.spheres[index] = sphere
      settings.mapImage.el.appendChild(sphere.el)
    }
  }

  const moveCursor = e => {
    const { d } = settings.map
    const { width, height, left, top } = settings.mapImage.canvas.getBoundingClientRect()
    if (e.pageX > left && e.pageX < (left + width) && e.pageY > top && e.pageY < (top + height)) {
      settings.cursor.x = nearestN(e.pageX - left - window.scrollX, d) - d + left + window.scrollX
      settings.cursor.y = nearestN(e.pageY - top - window.scrollY, d) - d + top + window.scrollY
      settings.cursor.el.classList.remove('d-none')
      setStyles(settings.cursor)
    } else {
      settings.cursor.el.classList.add('d-none')
    }

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

  const moveNpc = ({ npc, newPos }) => {
    if (!settings.isWindowActive) return
    turnSprite({ actor: npc, newPos })
    npc.pos = newPos
    const { column, d } = settings.map
    npc.x = Math.floor(newPos % column) * d
    npc.y = Math.floor(newPos / column) * d
    setPos(npc)
  }

  const createNpcs = () => {
    const dogBlobs = new Array(3).fill('').map((_, i) => {
      return {
        ...npcObj,
        ...dogBlobObj,
        id: `dog_${i}`,
        el: Object.assign(document.createElement('div'), 
        { 
          className: 'npc sprite-container',
          innerHTML: '<div class="overflow-hidden"><div class="dogblob sprite"></div></div>'
        }),
        motionTimer: null,
        searchMemory: null,
        route: [],
        track: [],
      }
    })
    const mouseBlobs = new Array(10).fill('').map((_, i) => {
      return {
        ...npcObj,
        ...mouseBlobObj,
        id: `mouse_${i}`,
        el: Object.assign(document.createElement('div'), 
        { 
          className: 'npc sprite-container',
          innerHTML: '<div class="overflow-hidden small"><div class="mouseblob sprite"></div></div>'
        }),
      }
    })
    settings.npcs = [
      ...dogBlobs,
      ...mouseBlobs
    ]
  }

  const addNpcs = () => {
    settings.npcs.forEach(npc => {
      const { pos } = npc
      npc.sprite = npc.el.childNodes[0].childNodes[0]
      moveNpc({ npc, newPos:pos })
      settings.mapImage.el.appendChild(npc.el)
      triggerNpcMotion(npc)
    })
  }

  const damagePlayer = npc => {
    npc.el.classList.add('attacking')
    npc.attackDir = Math.abs(npc.pos - player.pos) === 1 ? 'horizontal' : 'vertical'
    npc.el.classList.add(npc.attackDir)
    turnSprite({ actor: npc, newPos: player.pos})
    setTimeout(()=> {
      npc.el.classList.remove('attacking')
      npc.el.classList.remove(npc.attackDir)
    }, 2000)

    player.life.point -= 1
    player.life.w = player.life.point * 20
    player.invincible = true
    player.el.classList.add('blink')
    setStyles(player.life)
    // setTimeout(()=> {
    //   player.invincible = false
    //   player.el.classList.remove('blink')
    // }, 6000)
  }

  const catchMouse = npc => {
    if (npc.pause) return
    npc.pause = true
    npc.el.classList.add('sparkle')
    setTimeout(()=> {
      settings.mapImage.el.removeChild(npc.el)
      settings.npcs = settings.npcs.filter(n => npc.id !== n.id)
    }, 1000)
  }

  createNpcs()
  setupMap()
  addNpcs()


  setInterval(()=> {
    if (!settings.isWindowActive) return
    settings.yOffset = settings.yOffset + 1 === 4
      ? 0
      : settings.yOffset + 1
    ;[player,...settings.npcs].forEach(actor => {
      const { sprite: el, d } = actor
      setPos({ el, y: [0, -d, -(d * 2), -d][settings.yOffset] })
    })
    
    if (!player.invincible) {
      settings.npcs.forEach(npc => {
        if (npc.isFleeing && npc.pos === player.pos) {
          catchMouse(npc)
        } else if (npc.isHunting && npc.pos === player.pos) {
          damagePlayer(npc)
        }
      })
    } else {
      player.invincibleCount += 1
      if (player.invincibleCount > 30) {
        player.invincibleCount = 0
        player.invincible = false
        player.el.classList.remove('blink')
      }
    }
  }, 200)

  setInterval(()=> {
    if (!settings.isWindowActive) return
    settings.npcs.forEach(npc => {
      if (npc.isFleeing && !npc.pause) {
        avoidPlayer(npc)
      } else if (npc.isHunting) {
        triggerNpcMotion(npc)
      }
    })
  }, 600)

  window.addEventListener('focus', ()=> settings.isWindowActive = true)
  window.addEventListener('blur', ()=> settings.isWindowActive = false)
  
  window.addEventListener('resize', adjustMapWidthAndHeight)
  window.addEventListener('mousemove', moveCursor )
  settings.map.el.addEventListener('click', placeSphere)
  window.addEventListener('keyup', () => {
    player.walkingDirection = null
    clearInterval(player.walkingInterval)
  })
  window.addEventListener('keydown', handleKeyAction)
  elements.arrows.forEach(arrow => {
    ;['mousedown', 'touchstart'].forEach(action => {
      arrow.addEventListener(action, ()=> {
        settings.controlTimer = setInterval(()=> {
          walk({ actor: player, dir: arrow.dataset.dir })
        }, 200)
      })
    })
    ;['mouseup', 'touchend'].forEach(action => {
      arrow.addEventListener(action, ()=> clearInterval(settings.controlTimer))
    })
  })
}

window.addEventListener('DOMContentLoaded', init)



