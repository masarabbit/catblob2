
// TODO remove w from sprite sheet
//block_r_joint needs to be checked. had same name as block_edge_r_joint
//probably their's some contradictory combination
// see if blocks could be simplified

// const tiles = [
//   { // 1
//       "key": "a",
//       "id": "h",
//       "up": ['block', 'floor', 'floor'],
//       "right": ['h','h','h','h_edge_h','l_corner_h'],
//       "down": ['floor', 'floor'],
//       "left": ['h','h','h', 'h_edge', 'l_corner']
//   },
//   { // 2
//       "key": "b",
//       "id": "h_edge",
//       "up": ['floor','floor','floor'],
//       "right": ['h','h_edge_h','l_corner_h'],
//       "down": ['floor','floor','floor'],
//       "left": ['dot', 'floor','floor','floor']
//   },
//   { // 3
//       "key": "b.h",
//       "id": "h_edge_h",
//       "up": ['floor','floor','floor'],
//       "right": ['dot', 'floor','floor','floor'],
//       "down": ['floor','floor','floor'],
//       "left": ['h','h_edge','l_corner']
//   },
//   { // 4
//       "key": "c",
//       "id": "v_down_edge",
//       "up": ['v','v_up_edge','v_r_joint','v_r_joint_h','v_t_joint','v_r_joint','v_r_joint_h'],
//       "right": ['floor','floor','floor','dot','l_corner'],
//       "down": ['floor','floor','floor','dot'],
//       "left": ['floor','floor','floor','dot','l_corner_h']
//   },
//   { // 5
//       "key": "d",
//       "id": "v",
//       "up": ['v','v','v', 't_joint_down', 'v_up_edge','v_r_joint','v_r_joint_h'],
//       "right": ['dot', 'floor','floor','floor'],
//       "down": ['v','v','v','v_down_edge', 't_joint_up', 'v_l_joint','v_l_joint_h'],
//       "left": ['dot', 'floor','floor','floor']
//   },
//   { // 6
//       "key": "e",
//       "id": "t_joint_down",
//       "up": ['t_joint_up','block','floor','floor','floor'],
//       "right": ['h','h_edge_h','l_corner_h'],
//       "down": ['v_I_joint','v_t_joint'],
//       "left": ['h','h_edge','l_corner']
//   },
//   {  // 7
//       "key": "f",
//       "id": "t_joint_up",
//       "up": ['v','v_up_edge','v_t_joint','v_t_joint_h'],
//       "right": ['floor','floor','floor'],
//       "down": ['t_joint_down','block','h','block_r_joint','block_r_joint_h'],
//       "left": ['floor','floor','floor']
//   },
//   { // 8
//       "key": "g",
//       "id": "v_up_edge",
//       "up": ['floor','floor','floor'],
//       "right": ['floor','floor','floor'],
//       "down": ['v_down_edge','v','v_l_joint','v_l_joint_h'],
//       "left": ['floor','floor','floor']
//   },
//   { // 9
//       "key": "h",
//       "id": "l_corner",
//       "up": ['block_edge','block_corner'],
//       "right": ['h','h_edge_h','l_corner_h','r_corner_h','block_r_joint_h'],
//       "down": ['floor'],
//       "left": ['floor']
//   },
//   { // 10
//       "key": "h.h",
//       "id": "l_corner_h",
//       "up": ['block_edge_h','block_corner_h'],
//       "right": ['floor','floor','floor'],
//       "down": ['floor','floor','floor'],
//       "left": ['h','h_edge','l_corner','l_corner','block_r_joint']
//   },
//   { // 11
//       "key": "i",
//       "id": "v_l_joint",
//       "up": ['v','v_t_joint','v_up_edge','v_up_edge_h','v_r_joint','v_r_joint_h'],
//       "right": ['floor','floor','floor'],
//       "down": ['block_edge','l_corner','block_l_joint_h'],
//       "left": ['floor','floor','floor']
//   },
//   { // 12
//       "key": "i.h",
//       "id": "v_l_joint_h",
//       "up": ['v','v_up_edge','v_t_joint','v_r_joint','v_r_joint_h'],
//       "right": ['floor','floor','floor'],
//       "down": ['block_edge_h','l_corner_h','block_l_joint'],
//       "left": ['floor','floor','floor']
//   },
//   { // 13
//       "key": "j",
//       "id": "v_joint_c",
//       "up": ['r_corner'],
//       "right": ['floor','floor','floor'],
//       "down": ['block_edge','l_corner'],
//       "left": ['floor','floor','floor']
//   },
//   { // 14
//       "key": "j.h",
//       "id": "v_joint_c_h",
//       "up": ['r_corner_h'],
//       "right": ['floor','floor','floor'],
//       "down": ['block_edge_h','l_corner_h'],
//       "left": ['floor','floor','floor']
//   },
//   { // 15
//       "key": "k",
//       "id": "r_corner",
//       "up": ['floor','floor','floor'],
//       "right": ['h','h_edge_h'],
//       "down": ['v_r_joint','v_joint_c'],
//       "left": ['floor','floor','floor']
//   },
//   { // 16
//       "key": "k.h",
//       "id": "r_corner_h",
//       "up": ['floor','floor','floor'],
//       "right": ['floor','floor','floor'],
//       "down": ['v_joint_c_h','v_r_joint_h'],
//       "left": ['h','h_edge']
//   },
//   { // 17
//       "key": "l",
//       "id": "block",
//       "up": ['t_joint_up','block','floor','floor','floor'],
//       "right": ['block','block_corner_h','block_l_joint','block_r_joint'],
//       "down": ['h','block','floor','floor','floor','block_r_joint','block_r_joint_h'],
//       "left": ['block_l_joint_h', 'block', 'block_corner','block_r_joint_h']
//   },
//   { // 18
//       "key": "m",
//       "id": "block_edge",
//       "up": ['block_edge','block_corner'],
//       "right": ['block'],
//       "down": ['block_edge','l_corner'],
//       "left": ['floor','floor','floor']
//   },
//   { // 19
//       "key": "m.h",
//       "id": "block_edge_h",
//       "up": ['block_edge_h','block_corner_h'],
//       "right": ['floor','floor','floor'],
//       "down": ['block_edge_h','l_corner_h'],
//       "left": ['block']
//   },
//   { // 20
//       "key": "n",
//       "id": "block_corner",
//       "up": ['floor','floor','floor'],
//       "right": ['block_corner_h','block'],
//       "down": ['block_edge','l_corner'],
//       "left": ['floor','floor','floor']
//   },
//   { // 21
//       "key": "n.h",
//       "id": "block_corner_h",
//       "up": ['floor','floor','floor'],
//       "right": ['floor','floor','floor'],
//       "down": ['block_edge_h','l_corner_h'],
//       "left": ['block_corner','block']
//   },
//   { // 22
//       "key": "o",
//       "id": "dot",
//       "up": ['dot','floor','floor','floor','floor'],
//       "right": ['dot','floor','floor','floor','floor'],
//       "down": ['dot','floor','floor','floor','floor'],
//       "left": ['dot','floor','floor','floor','floor'],
//   },
//   { // 23
//       "key": "p",
//       "id": "floor",
//       "up": ['floor','floor','floor','h','h_edge','h_edge_h','v_down_edge','l_corner','l_corner_h','dot',''],
//       "right": ['floor','floor','floor','h_edge','l_corner','r_corner','block_edge','dot','block_corner','v_r_joint','v_r_joint_h','block_l_joint_h','block_c_joint_h','block_r_joint_h','v_I_joint','v_t_joint'],
//       "down": ['floor','floor','floor','h','h_edge','h_edge_h','dot','v_up_edge','r_corner','r_corner_h'],
//       "left": ['floor','floor','floor','h_edge_h','dot','v_up_edge','l_corner_h','v_l_joint','v_l_joint_h','v_joint_c_h','r_corner_h','block_edge_h','block_corner_h','v_r_joint_h','block_l_joint','block_c_joint','block_r_joint','v_I_joint','v_t_joint']
//   },
//   {
//       "key": "q",
//       "id": "v_r_joint",
//       "up": ['r_corner'],
//       "right": ['floor','floor','floor'],
//       "down": ['v_down_edge','v','t_joint_up','v_l_joint','v_l_joint_h'],
//       "left": ['floor','floor','floor']
//   },
//   {
//       "key": "q.h",
//       "id": "v_r_joint_h",
//       "up": ['r_corner_h'],
//       "right": ['floor','floor','floor'],
//       "down": ['v_down_edge','v','t_joint_up','v_l_joint','v_l_joint_h'],
//       "left": ['floor','floor','floor']
//   },
//   {
//       "key": "r",
//       "id": "block_l_joint",
//       "up": ['block_edge_h','block_corner_h'],
//       "right": ['floor','floor','floor'],
//       "down": ['h','block','block_r_joint','block_r_joint_h'],
//       "left": ['block_l_joint_h','block','block_edge','block_c_joint_h','block_r_joint_h']
//   },
//   {
//       "key": "r.h",
//       "id": "block_l_joint_h",
//       "up": ['block_edge','block_corner'],
//       "right": ['block','block_l_joint','block_c_joint','block_r_joint'],
//       "down": ['h','block','block_r_joint','block_r_joint_h'],
//       "left": ['floor','floor','floor']
//   },


//   {
//       "key": "s",
//       "id": "block_c_joint",
//       "up": ['block_r_joint'],
//       "right": ['floor'],
//       "down": ['h','block_r_joint','block_r_joint_h','block'],
//       "left": ['block','block_edge','block_l_joint_h','block_c_joint_h','block_edge_r_joint_h','block_r_joint_h']
//   },
//   {
//       "key": "s.h",
//       "id": "block_c_joint_h",
//       "up": ['block_r_joint_h'],
//       "right": ['block','block_edge_h','block_l_joint','block_c_joint','block_r_joint','block_edge_r_joint'],
//       "down": ['h','block_r_joint','block_r_joint_h','block'],
//       "left": ['floor']
//   },
//   {
//       "key": "t",
//       "id": "block_edge_r_joint",
//       "up": ['block_r_joint'],
//       "right": ['floor'],
//       "down": ['block_edge_h','block_l_joint'],
//       "left": ['block','block_edge','block_l_joint_h','block_c_joint_h','block_edge_r_joint_h','block_r_joint_h']
//   },
//   {
//       "key": "t.h",
//       "id": "block_edge_r_joint_h",
//       "up": ['block_r_joint_h'],
//       "right": ['block','block_edge_h','block_l_joint','block_c_joint','block_edge_r_joint','block_r_joint'],
//       "down": ['block_edge_h','block_l_joint'],
//       "left": ['floor']
//   },
//   {
//       "key": "u",
//       "id": "v_I_joint",
//       "up": ['t_joint_down'],
//       "right": ['floor','floor','floor'],
//       "down": ['h','block','block_r_joint','block_r_joint_h'],
//       "left": ['floor','floor','floor']
//   },
//   {
//       "key": "v",
//       "id": "v_t_joint",
//       "up": ['t_joint_down'],
//       "right": ['floor','floor','floor'],
//       "down": ['v_down_edge','v','t_joint_up','v_l_joint','v_l_joint_h'],
//       "left": ['floor','floor','floor']
//   },
//   {
//       "key": "w",
//       "id": "block_r_joint",
//       "up": ['block','floor',],
//       "right": ['h','h','h_edge_h','l_corner_h'],
//       "down": ['block_c_joint','block_edge_r_joint'],
//       "left": ['block','block_edge','block_l_joint_h','block_c_joint_h','block_edge_r_joint_h','block_r_joint_h']
//   },
//   {
//       "key": "w.h",
//       "id": "block_r_joint_h",
//       "up": ['block','floor'],
//       "right": ['block','block_edge_h','block_l_joint','block_c_joint','block_edge_r_joint','block_r_joint'],
//       "down": ['block_c_joint','block_edge_r_joint'],
//       "left": ['h','h','h_edge','l_corner']
//   },
//   // {
//   //     "key": "zz",
//   //     "id": "undefined_undefined",
//   //     "up": [],
//   //     "right": [],
//   //     "down": [],
//   //     "left": []
//   // },
//   // {
//   //     "key": "$",
//   //     "id": "wall",
//   //     "up": [],
//   //     "right": [],
//   //     "down": [],
//   //     "left": []
//   // }
// ]

const tiles = [
  { // 1
    "key": "b",
    "id": "h_edge",
    "up": ['floor','floor','floor'],
    "right": ['h','h_edge_h','l_corner_h','t_joint_down'],
    "down": ['floor','floor','floor','v_up_edge'],
    "left": ['dot', 'floor','floor','floor','v']
  },
  { // 2
    "key": "a",
    "id": "h",
    "up": ['floor','floor','floor','h'],
    "right": ['h','h','h','h_edge_h','l_corner_h'],
    "down": ['floor', 'floor','h','v_up_edge'],
    "left": ['h','h','h', 'h_edge', 'l_corner']
  },
  { // 3
    "key": "e",
    "id": "t_joint_down",
    "up": ['v','floor','floor','floor','dot'],
    "right": ['h','h','h','h_edge_h','l_corner_h','t_joint_down'],
    "down": ['v','v_down_edge'],
    "left": ['h','h','h','h_edge','l_corner','t_joint_down']
  },
  { // 4
    "key": "b.h",
    "id": "h_edge_h",
    "up": ['floor','floor','floor','h_edge_h','h_edge','h'],
    "right": ['dot', 'floor','floor','floor','v'],
    "down": ['floor','floor','floor','h_edge_h','h_edge','h','v_up_edge'],
    "left": ['h','h_edge','l_corner','t_joint_down']
  },
  { // 5
    "key": "g",
    "id": "v_up_edge",
    "up": ['floor','floor','floor'],
    "right": ['floor','floor','floor'],
    "down": ['v'],
    "left": ['floor','floor','floor']
  },
  { // 6
    "key": "h",
    "id": "l_corner",
    "up": ['v'],
    "right": ['h','h_edge_h','l_corner_h'],
    "down": ['floor'],
    "left": ['floor']
  },
  { // 7
    "key": "h.h",
    "id": "l_corner_h",
    "up": ['v'],
    "right": ['floor','floor','floor'],
    "down": ['floor','floor','floor'],
    "left": ['h','h_edge','l_corner',]
  },
    { // 8
      "key": "k",
      "id": "r_corner",
      "up": ['floor','floor','floor'],
      "right": ['h','h_edge_h'],
      "down": ['v'],
      "left": ['floor','floor','floor']
  },
  { // 9
    "key": "k.h",
    "id": "r_corner_h",
    "up": ['floor','floor','floor'],
    "right": ['floor','floor','floor'],
    "down": ['v'],
    "left": ['h','h_edge']
  },
  { // 10
    "key": "d",
    "id": "v",
    "up": ['v','v','v', 't_joint_down', 'v_up_edge','v_r_joint','v_r_joint_h'],
    "right": ['dot', 'floor','floor','floor'],
    "down": ['v','v','v','v_down_edge','l_corner','l_corner_h','h'],
    "left": ['dot', 'floor','floor','floor']
  },
  { // 11
    "key": "o",
    "id": "dot",
    "up": ['dot','floor','floor','floor','floor','h'],
    "right": ['dot','floor','floor','floor','floor','v','r_corner'],
    "down": ['dot','floor','floor','floor','floor','h','h_edge_h','h_edge'],
    "left": ['dot','floor','floor','floor','floor','v','r_corner_h'],
  },
  { // 12
    "key": "c",
    "id": "v_down_edge",
    "up": ['v','v','v','v_up_edge'],
    "right": ['floor','floor','floor','dot','v_up_edge','v'],
    "down": ['floor','floor','floor','dot','h_edge_h','h_edge'],
    "left": ['floor','floor','floor','dot','v_up_edge','v']
  },
    { // 23
      "key": "p",
      "id": "floor",
      "up": ['floor','h','h_edge','h_edge_h','l_corner','l_corner_h','dot','v_down_edge'],
      "right": ['floor','h_edge','r_corner_h','dot','v'],
      "down": ['floor','h','h_edge','h_edge_h','dot','v_up_edge'],
      "left": ['floor','h_edge_h','r_corner','dot','v']
  },
]


export {
  tiles
}