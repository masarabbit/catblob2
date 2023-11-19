
const editConfig = {
  a: 90,
  b: 180,
  c: 270,  
}

const tileTypes = {
  Q: ['', 'a', 'b', 'c', 'h', 'v', 'ah', 'bh', 'ch', 'av', 'bv', 'cv', 'avh', 'bvh', 'cbh'],
  X: [''],
  L: ['', 'a', 'b', 'c'],
  H: ['', 'a'],
  A: ['', 'h'],
  T: ['', 'v']
}

const tiles = {
  a: {
    id: 'h',
    img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAChJREFUOE9jdDO685+BAsA4agDDaBgwUCEMbFbsoywljhrAwEhpGAAAloUnFempuY8AAAAASUVORK5CYII=',
    type: 'X',
    up: [],
    right: [],
    down: [],
    left: [],
  },
  b: {
    id: 'h_edge',
    img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAFBJREFUOE9jZIACN6M7/2FsUmhGkGJyNYP0Um4AJbaDXTAMDLBZse8/V5ccKTGHopaRKgaAjCTXFWAXkO1+UDQOvAEg51PiCnBeoNgASgwBAE5/KhUy95XiAAAAAElFTkSuQmCC',
    type: 'A',
    up: [],
    right: [],
    down: [],
    left: [],
  },
  c: {
    id: 'v_down_edge',
    img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAGNJREFUOE9jZEACbkZ3/iPzcbF3nVNhhMnBGSCBUQMGQxjYrNj3n6tLDm9Mfit7xHAkwgl7NFLFAJj16C4B2QwDeF1ATEocxAaAnA8KSHzeQHY+SB1KZqKKATDb0V2CbjNMHQCo3UkR9yZUrgAAAABJRU5ErkJggg==',
    type: 'X',
    up: [],
    right: [],
    down: [],
    left: [],
  },
  d: {
    id: 'v',
    img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAACpJREFUOE9jZEACbkZ3/iPzcbF3nVNhhMnBGSCBUQNGw2A0HUCyxtDMCwB9tkARyLXlUQAAAABJRU5ErkJggg==',
    type: 'X',
    up: [],
    right: [],
    down: [],
    left: [],
  },
  e: {
    id: 't_joint_down',
    img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAADhJREFUOE9jdDO685+BAsA4agDDaBgwUCEMbFbsA6dEri45ktLjt7JHYPWMMANIMQSmedQASJgDAGq4ORV7EyWgAAAAAElFTkSuQmCC',
    type: 'X',
    up: [],
    right: [],
    down: [],
    left: [],
  },
  f: {
    id: 't_joint_up',
    img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAADJJREFUOE9jZEACbkZ3/iPzcbF3nVNhhMnBGSCBUQNGw2A0HUCyxsDmBWJth2VjWJYGAIBOQBHRRqhXAAAAAElFTkSuQmCC',
    type: 'X',
    up: [],
    right: [],
    down: [],
    left: [],
  },
  g: {
    id: 'v_up_edge',
    img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAADdJREFUOE9jZMAB3Izu/EeW2nVOhRGbUgxBdI3omtANoq4BhGyHuQbZFSguGDWAgWE0DEZsGAAAcL5AEQVEYoIAAAAASUVORK5CYII=',
    type: 'X',
    up: [],
    right: [],
    down: [],
    left: [],
  },
  h: {
    id: 'l_corner',
    img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAFdJREFUOE9jZEACbkZ3/iPziWEzjhrAQN0wsFmx7z9XlxwxgQ9Xg+ICqhgAMpoUV2C4ANn9xBiE1wBiAoO6BoBsBAUkMTbD1KC4gCoGkGoIhguQnU+MdwDCTysVFgHPtgAAAABJRU5ErkJggg==',
    type: 'A',
    up: [],
    right: [],
    down: [],
    left: [],
  },
  i: {
    id: 'v_l_joint',
    img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAC9JREFUOE9jZEACbkZ3/iPzcbF3nVNhhMnBGSCBUQNGw2A0HUCyxtDJCyDXwrI0AHcCQBGnDb7AAAAAAElFTkSuQmCC',
    type: 'A',
    up: [],
    right: [],
    down: [],
    left: [],
  },
  j: {
    id: 'v_joint_c',
    img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAADpJREFUOE9jZEACbkZ3/iPzcbG/lT1iOBLhxAiSBxMwQKwBu86pwPWNGjAaiKMJCZKDBiYvgGyG5UgAJf5CEfma360AAAAASUVORK5CYII=',
    type: 'A',
    up: [],
    right: [],
    down: [],
    left: [],
  },
  k: {
    id: 'r_corner',
    img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAENJREFUOE9jZMAD3Izu/McnD5JjxKaAGI0wfRgGkKIZqwsoMoBUzRguGDWAgYGuYfCt7BE4LaEkJGJdANM8agAkPwIAR/czFUbqsL8AAAAASUVORK5CYII=',
    type: 'A',
    up: [],
    right: [],
    down: [],
    left: [],
  },
  l: {
    id: 'block',
    color: '#4632dc',
    type: 'X',
    up: [],
    right: [],
    down: [],
    left: [],
  },
  m: {
    id: 'block_edge',
    img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAACJJREFUOE9jZEACbkZ3/iPziWEzjhrAMBoGDKNhwDAswgAAO2IlQePWikMAAAAASUVORK5CYII=',
    type: 'A',
    up: [],
    right: [],
    down: [],
    left: [],
  },
  n: {
    id: 'block_corner',
    img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAADRJREFUOE9jZMAD3Izu/McnD5JjxKaAGI0wfRgGkKIZqwsoMoBUzRguGDWAgWE0DIZqGAAA8PMlQR6HeCgAAAAASUVORK5CYII=',
    type: 'A',
    up: [],
    right: [],
    down: [],
    left: [],
  },
  o: {
    id: 'dot',
    img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAHVJREFUOE9jZMAB3Izu/EeW2nVOhRGbUgxBdI3omtANoq4BhGyHuQbZFSguGAYG2KzY95+rSw5XzILFv5U9YjgS4QT3OkoYUMUAmPXoLgHZDAN4XYDX/VDJQWwAyIWggMTnDWTng9Rh5AWKDYDZjm4Qus0wdQCb5UkRq7DlIQAAAABJRU5ErkJggg==',
    type: 'X',
    up: [],
    right: [],
    down: [],
    left: [],
  },
  p: {
    id: 'floor',
    color: '#2e1a66',
    type: 'X',
    up: [],
    right: [],
    down: [],
    left: [],
  },
  q: {
    id: 'v_r_joint',
    img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAADZJREFUOE9jZEACbkZ3/iPzcbG/lT1iOBLhxAiSBxMwQKwBu86pwPWNGjAaiKMJCZKDBj4vAAAsskIR7/AzGQAAAABJRU5ErkJggg==',
    type: 'A',
    up: [],
    right: [],
    down: [],
    left: [],
  },
  r: {
    id: 'block_l_joint',
    img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAClJREFUOE9jdDO685+BRLDrnAojTAvjqAEMo2HAMBoGDEM2DEBZGZalATVgQBEam5zyAAAAAElFTkSuQmCC',
    type: 'A',
    up: [],
    right: [],
    down: [],
    left: [],
  },
  s: {
    id: 'block_c_joint',
    img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAADJJREFUOE9jdDO685+BRPCt7BHDkQgnRpA2RnIM2HVOBax51IDRMBhNBwOdF0AxAMuRAORNQhFpDj+TAAAAAElFTkSuQmCC',
    type: 'A',
    up: [],
    right: [],
    down: [],
    left: [],
  },
  t: {
    id: 'block_r_joint',
    img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAC5JREFUOE9jdDO685+BRPCt7BHDkQgnRpA2RnIM2HVOBax51IDRMBhNB4MpLwAA6wFCEWvIqcYAAAAASUVORK5CYII=',
    type: 'A',
    up: [],
    right: [],
    down: [],
    left: [],
  },
  u: {
    id: 'v_I_joint',
    img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAERJREFUOE9jZIACmxX7/nN1ycG4eOlvZY8YjkQ4MYIUgQkYcDO6858YE3adU4HrGzVgNBBHExIk11AvLxCbE2G5FZYjATwKQxEXNFm7AAAAAElFTkSuQmCC',
    type: 'X',
    up: [],
    right: [],
    down: [],
    left: [],
  },
  v: {
    id: 'v_t_joint',
    img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAD1JREFUOE9jZIACmxX7/nN1ycG4eOlvZY8YjkQ4MYIUgQkYcDO6858YE3adU4HrGzVgNBBHExIk1wx8XgAAOXJDEUyRTrkAAAAASUVORK5CYII=',
    type: 'X',
    up: [],
    right: [],
    down: [],
    left: [],
  },
  w: {
    id: 'v_r_joint',
    img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAADZJREFUOE9jZEACbkZ3/iPzcbG/lT1iOBLhxAiSBxMwQKwBu86pwPWNGjAaiKMJCZKDBj4vAAAsskIR7/AzGQAAAABJRU5ErkJggg==',
    type: 'A',
    up: [],
    right: [],
    down: [],
    left: [],
  },
  x: {
    id: 'block_r_joint',
    img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAACpJREFUOE9jdDO685+BAsA4agDDaBgwDGAYfCt7BE6/ZMUCTPOoAZAyAABQtTMVsn45jwAAAABJRU5ErkJggg==',
    type: 'A',
    up: [],
    right: [],
    down: [],
    left: [],
  },
  // q: {
  //   id: '',
  //   img: '',
  //   type: '',
  // },
    // q: {
  //   id: '',
  //   img: '',
  //   type: '',
  // },
  zz: {
    id: '',
    color: 'transparent',
    type: 'X',
  },
  $: {
    id: 'wall',
    color: '#ff8fe1',
    type: 'X',
  },
}

const tilesList = Object.keys(tiles).map(tile => {
  return {
    tile,
    frames: tiles[tile]?.frames ? tiles[tile].frames.map((_, i) => i) : [0]
  }
}).map(tileData => {
  return tileTypes[tiles[tileData.tile].type].map(append => {
    return tileData.frames.map(frameIndex => {
      return [`${tileData.tile}${append ? `.${append}` : ''}`, frameIndex]
    })
  }).flat(1)
}).flat(1)

const tileSheetData = {
  column: tilesList.length,
  row:  1,
  d: 16
}

const tileX = index => (index % tileSheetData.column) * tileSheetData.d
const tileY = index => Math.floor(index / tileSheetData.column) * tileSheetData.d

const newTilesData = [
  {
      "key": "a",
      "id": "h",
      "up": ['block', 'floor'],
      "right": ['h','h_edge_h','l_corner_h'],
      "down": ['floor'],
      "left": ['h', 'h_edge', 'l_corner']
  },
  {
      "key": "b",
      "id": "h_edge",
      "up": ['floor'],
      "right": ['h','h_edge_h','l_corner_h'],
      "down": ['floor'],
      "left": ['dot', 'floor']
  },
  {
      "key": "b.h",
      "id": "h_edge_h",
      "up": ['floor'],
      "right": ['dot', 'floor'],
      "down": ['floor'],
      "left": ['h','h_edge','l_corner']
  },
  {
      "key": "c",
      "id": "v_down_edge",
      "up": ['v','v_up_edge','v_r_joint','v_r_joint_h','v_t_joint','v_r_joint','v_r_joint_h'],
      "right": ['floor','dot','l_corner'],
      "down": ['floor','dot'],
      "left": ['floor','dot','l_corner_h']
  },
  // {
  //     "key": "d",
  //     "id": "v",
  //     "up": [],
  //     "right": [],
  //     "down": [],
  //     "left": []
  // },
  // {
  //     "key": "e",
  //     "id": "t_joint_down",
  //     "up": [],
  //     "right": [],
  //     "down": [],
  //     "left": []
  // },
  // {
  //     "key": "f",
  //     "id": "t_joint_up",
  //     "up": [],
  //     "right": [],
  //     "down": [],
  //     "left": []
  // },
  // {
  //     "key": "g",
  //     "id": "v_up_edge",
  //     "up": [],
  //     "right": [],
  //     "down": [],
  //     "left": []
  // },
  // {
  //     "key": "h",
  //     "id": "l_corner",
  //     "up": [],
  //     "right": [],
  //     "down": [],
  //     "left": []
  // },
  // {
  //     "key": "h.h",
  //     "id": "l_corner_h",
  //     "up": [],
  //     "right": [],
  //     "down": [],
  //     "left": []
  // },
  // {
  //     "key": "i",
  //     "id": "v_l_joint",
  //     "up": [],
  //     "right": [],
  //     "down": [],
  //     "left": []
  // },
  // {
  //     "key": "i.h",
  //     "id": "v_l_joint_h",
  //     "up": [],
  //     "right": [],
  //     "down": [],
  //     "left": []
  // },
  // {
  //     "key": "j",
  //     "id": "v_joint_c",
  //     "up": [],
  //     "right": [],
  //     "down": [],
  //     "left": []
  // },
  // {
  //     "key": "j.h",
  //     "id": "v_joint_c_h",
  //     "up": [],
  //     "right": [],
  //     "down": [],
  //     "left": []
  // },
  // {
  //     "key": "k",
  //     "id": "r_corner",
  //     "up": [],
  //     "right": [],
  //     "down": [],
  //     "left": []
  // },
  // {
  //     "key": "k.h",
  //     "id": "r_corner_h",
  //     "up": [],
  //     "right": [],
  //     "down": [],
  //     "left": []
  // },
  // {
  //     "key": "l",
  //     "id": "block",
  //     "up": [],
  //     "right": [],
  //     "down": [],
  //     "left": []
  // },
  // {
  //     "key": "m",
  //     "id": "block_edge",
  //     "up": [],
  //     "right": [],
  //     "down": [],
  //     "left": []
  // },
  // {
  //     "key": "m.h",
  //     "id": "block_edge_h",
  //     "up": [],
  //     "right": [],
  //     "down": [],
  //     "left": []
  // },
  // {
  //     "key": "n",
  //     "id": "block_corner",
  //     "up": [],
  //     "right": [],
  //     "down": [],
  //     "left": []
  // },
  // {
  //     "key": "n.h",
  //     "id": "block_corner_h",
  //     "up": [],
  //     "right": [],
  //     "down": [],
  //     "left": []
  // },
  // {
  //     "key": "o",
  //     "id": "dot",
  //     "up": [],
  //     "right": [],
  //     "down": [],
  //     "left": []
  // },
  // {
  //     "key": "p",
  //     "id": "floor",
  //     "up": [],
  //     "right": [],
  //     "down": [],
  //     "left": []
  // },
  // {
  //     "key": "q",
  //     "id": "v_r_joint",
  //     "up": [],
  //     "right": [],
  //     "down": [],
  //     "left": []
  // },
  // {
  //     "key": "q.h",
  //     "id": "v_r_joint_h",
  //     "up": [],
  //     "right": [],
  //     "down": [],
  //     "left": []
  // },
  // {
  //     "key": "r",
  //     "id": "block_l_joint",
  //     "up": [],
  //     "right": [],
  //     "down": [],
  //     "left": []
  // },
  // {
  //     "key": "r.h",
  //     "id": "block_l_joint_h",
  //     "up": [],
  //     "right": [],
  //     "down": [],
  //     "left": []
  // },
  // {
  //     "key": "s",
  //     "id": "block_c_joint",
  //     "up": [],
  //     "right": [],
  //     "down": [],
  //     "left": []
  // },
  // {
  //     "key": "s.h",
  //     "id": "block_c_joint_h",
  //     "up": [],
  //     "right": [],
  //     "down": [],
  //     "left": []
  // },
  // {
  //     "key": "t",
  //     "id": "block_r_joint",
  //     "up": [],
  //     "right": [],
  //     "down": [],
  //     "left": []
  // },
  // {
  //     "key": "t.h",
  //     "id": "block_r_joint_h",
  //     "up": [],
  //     "right": [],
  //     "down": [],
  //     "left": []
  // },
  // {
  //     "key": "u",
  //     "id": "v_I_joint",
  //     "up": [],
  //     "right": [],
  //     "down": [],
  //     "left": []
  // },
  // {
  //     "key": "v",
  //     "id": "v_t_joint",
  //     "up": [],
  //     "right": [],
  //     "down": [],
  //     "left": []
  // },
  // {
  //     "key": "w",
  //     "id": "v_r_joint",
  //     "up": [],
  //     "right": [],
  //     "down": [],
  //     "left": []
  // },
  // {
  //     "key": "w.h",
  //     "id": "v_r_joint_h",
  //     "up": [],
  //     "right": [],
  //     "down": [],
  //     "left": []
  // },
  // {
  //     "key": "x",
  //     "id": "block_r_joint",
  //     "up": [],
  //     "right": [],
  //     "down": [],
  //     "left": []
  // },
  // {
  //     "key": "x.h",
  //     "id": "block_r_joint_h",
  //     "up": [],
  //     "right": [],
  //     "down": [],
  //     "left": []
  // },
  // {
  //     "key": "zz",
  //     "id": "undefined_undefined",
  //     "up": [],
  //     "right": [],
  //     "down": [],
  //     "left": []
  // },
  // {
  //     "key": "$",
  //     "id": "wall",
  //     "up": [],
  //     "right": [],
  //     "down": [],
  //     "left": []
  // }
]

export {
  tiles,
  editConfig,
  tileTypes,
  tilesList,
  tileSheetData,
  tileX,
  tileY,
  newTilesData
}