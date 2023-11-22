
// TODO remove w from sprite sheet

const tiles = [
  { // 1
      "key": "a",
      "id": "h",
      "up": ['block', 'floor', 'floor'],
      "right": ['h','h','h','h_edge_h','l_corner_h'],
      "down": ['floor', 'floor'],
      "left": ['h','h','h', 'h_edge', 'l_corner']
  },
  { // 2
      "key": "b",
      "id": "h_edge",
      "up": ['floor','floor'],
      "right": ['h','h_edge_h','l_corner_h'],
      "down": ['floor','floor'],
      "left": ['dot', 'floor','floor']
  },
  { // 3
      "key": "b.h",
      "id": "h_edge_h",
      "up": ['floor','floor'],
      "right": ['dot', 'floor','floor'],
      "down": ['floor','floor'],
      "left": ['h','h_edge','l_corner']
  },
  { // 4
      "key": "c",
      "id": "v_down_edge",
      "up": ['v','v_up_edge','v_r_joint','v_r_joint_h','v_t_joint','v_r_joint','v_r_joint_h'],
      "right": ['floor','floor','dot','l_corner'],
      "down": ['floor','floor','dot'],
      "left": ['floor','floor','dot','l_corner_h']
  },
  { // 5
      "key": "d",
      "id": "v",
      "up": ['v','v','v', 't_joint_down', 'v_up_edge','v_r_joint','v_r_joint_h'],
      "right": ['dot', 'floor','floor'],
      "down": ['v','v','v','v_down_edge', 't_joint_up', 'v_l_joint','v_l_joint_h'],
      "left": ['dot', 'floor','floor']
  },
  { // 6
      "key": "e",
      "id": "t_joint_down",
      "up": ['t_joint_up','block','floor','floor'],
      "right": ['h','h_edge_h','l_corner_h'],
      "down": ['v_I_joint','v_t_joint'],
      "left": ['h','h_edge','l_corner']
  },
  {  // 7
      "key": "f",
      "id": "t_joint_up",
      "up": ['v','v_up_edge','v_t_joint','v_t_joint_h'],
      "right": ['floor','floor'],
      "down": ['t_joint_down','block','h','block_r_joint','block_r_joint_h'],
      "left": ['floor','floor']
  },
  { // 8
      "key": "g",
      "id": "v_up_edge",
      "up": ['floor','floor'],
      "right": ['floor','floor'],
      "down": ['v_down_edge','v','v_l_joint','v_l_joint_h'],
      "left": ['floor','floor']
  },
  { // 9
      "key": "h",
      "id": "l_corner",
      "up": ['block_edge','block_corner'],
      "right": ['h','h_edge_h','l_corner_h','r_corner_h','block_r_joint_h'],
      "down": ['floor'],
      "left": ['floor']
  },
  { // 10
      "key": "h.h",
      "id": "l_corner_h",
      "up": ['block_edge_h','block_corner_h'],
      "right": ['floor','floor'],
      "down": ['floor','floor'],
      "left": ['h','h_edge','l_corner','l_corner','block_r_joint']
  },
  { // 11
      "key": "i",
      "id": "v_l_joint",
      "up": ['v','v_t_joint','v_up_edge','v_up_edge_h','v_r_joint','v_r_joint_h'],
      "right": ['floor','floor'],
      "down": ['block_edge','l_corner','block_l_joint_h'],
      "left": ['floor','floor']
  },
  { // 12
      "key": "i.h",
      "id": "v_l_joint_h",
      "up": ['v','v_up_edge','v_t_joint','v_r_joint','v_r_joint_h'],
      "right": ['floor','floor'],
      "down": ['block_edge_h','l_corner_h','block_l_joint'],
      "left": ['floor','floor']
  },
  { // 13
      "key": "j",
      "id": "v_joint_c",
      "up": ['r_corner'],
      "right": ['floor','floor'],
      "down": ['block_edge','l_corner'],
      "left": ['floor','floor']
  },
  { // 14
      "key": "j.h",
      "id": "v_joint_c_h",
      "up": ['r_corner_h'],
      "right": ['floor','floor'],
      "down": ['block_edge_h','l_corner_h'],
      "left": ['floor','floor']
  },
  { // 15
      "key": "k",
      "id": "r_corner",
      "up": ['floor','floor'],
      "right": ['h','h_edge_h'],
      "down": ['v_r_joint','v_joint_c'],
      "left": ['floor','floor']
  },
  { // 16
      "key": "k.h",
      "id": "r_corner_h",
      "up": ['floor','floor'],
      "right": ['floor','floor'],
      "down": ['v_joint_c_h','v_r_joint_h'],
      "left": ['h','h_edge']
  },
  { // 17
      "key": "l",
      "id": "block",
      "up": ['t_joint_up','block','floor','floor'],
      "right": ['block','block_corner_h','block_l_joint','block_r_joint'],
      "down": ['h','block','floor','floor','block_r_joint','block_r_joint_h'],
      "left": ['block_l_joint_h', 'block', 'block_corner','block_r_joint_h']
  },
  { // 18
      "key": "m",
      "id": "block_edge",
      "up": ['block_edge','block_corner'],
      "right": ['block'],
      "down": ['block_edge','l_corner'],
      "left": ['floor','floor']
  },
  { // 19
      "key": "m.h",
      "id": "block_edge_h",
      "up": ['block_edge_h','block_corner_h'],
      "right": ['floor','floor'],
      "down": ['block_edge_h','l_corner_h'],
      "left": ['block']
  },
  { // 20
      "key": "n",
      "id": "block_corner",
      "up": ['floor','floor'],
      "right": ['block_corner_h','block'],
      "down": ['block_edge','l_corner'],
      "left": ['floor','floor']
  },
  { // 21
      "key": "n.h",
      "id": "block_corner_h",
      "up": ['floor','floor'],
      "right": ['floor','floor'],
      "down": ['block_edge_h','l_corner_h'],
      "left": ['block_corner','block']
  },
  { // 22
      "key": "o",
      "id": "dot",
      "up": ['dot','floor','floor','floor'],
      "right": ['dot','floor','floor','floor'],
      "down": ['dot','floor','floor','floor'],
      "left": ['dot','floor','floor','floor'],
  },
  { // 23
      "key": "p",
      "id": "floor",
      "up": ['floor','floor','h','h_edge','h_edge_h','v_down_edge','l_corner','l_corner_h','dot',''],
      "right": ['floor','floor','h_edge','l_corner','r_corner','block_edge','dot','block_corner','v_r_joint','v_r_joint_h','block_l_joint_h','block_c_joint_h','block_r_joint_h','v_I_joint','v_t_joint'],
      "down": ['floor','floor','h','h_edge','h_edge_h','dot','v_up_edge','r_corner','r_corner_h'],
      "left": ['floor','floor','h_edge_h','dot','v_up_edge','l_corner_h','v_l_joint','v_l_joint_h','v_joint_c_h','r_corner_h','block_edge_h','block_corner_h','v_r_joint_h','block_l_joint','block_c_joint','block_r_joint','v_I_joint','v_t_joint']
  },
  {
      "key": "q",
      "id": "v_r_joint",
      "up": [],
      "right": [],
      "down": [],
      "left": []
  },
  {
      "key": "q.h",
      "id": "v_r_joint_h",
      "up": ['r_corner'],
      "right": ['floor','floor'],
      "down": ['v_down_edge','v','t_joint_up','v_l_joint','v_l_joint_h'],
      "left": ['floor','floor']
  },
  {
      "key": "r",
      "id": "block_l_joint",
      "up": ['block_edge_h','block_corner_h'],
      "right": ['floor','floor'],
      "down": ['h','block','block_r_joint','block_r_joint_h'],
      "left": ['block_l_joint_h','block','block_edge','block_c_joint_h','block_r_joint_h']
  },
  {
      "key": "r.h",
      "id": "block_l_joint_h",
      "up": ['block_edge','block_corner'],
      "right": ['block','block_l_joint','block_c_joint','block_r_joint'],
      "down": ['h','block','block_r_joint','block_r_joint_h'],
      "left": ['floor','floor']
  },


  {
      "key": "s",
      "id": "block_c_joint",
      "up": [],
      "right": [],
      "down": [],
      "left": []
  },
  {
      "key": "s.h",
      "id": "block_c_joint_h",
      "up": [],
      "right": [],
      "down": [],
      "left": []
  },
  {
      "key": "t",
      "id": "block_r_joint",
      "up": [],
      "right": [],
      "down": [],
      "left": []
  },
  {
      "key": "t.h",
      "id": "block_r_joint_h",
      "up": [],
      "right": [],
      "down": [],
      "left": []
  },
  {
      "key": "u",
      "id": "v_I_joint",
      "up": [],
      "right": [],
      "down": [],
      "left": []
  },
  {
      "key": "v",
      "id": "v_t_joint",
      "up": [],
      "right": [],
      "down": [],
      "left": []
  },
  {
      "key": "w",
      "id": "block_r_joint",
      "up": [],
      "right": [],
      "down": [],
      "left": []
  },
  {
      "key": "w.h",
      "id": "block_r_joint_h",
      "up": [],
      "right": [],
      "down": [],
      "left": []
  },
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
  tiles
}