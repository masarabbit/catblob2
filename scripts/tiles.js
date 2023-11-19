const tiles = [
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
  tiles
}