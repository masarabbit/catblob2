const tiles = [
  {
    id: 'h_edge',
    key: 'b',
    criteria: ['xoxx']
  },
  {
    id: 'h',
    key: 'a',
    criteria: ['xoxo', 'ooxo']
  },
  {
    id: 't_joint_down',
    key: 'e',
    criteria: ['xooo','oooo'],
    criteria2: ['xx']
  },
  {
    id: 'h_edge_h',
    key: 'b.h',
    criteria: ['xxxo']
  },
  {
    id: 'v_up_edge',
    key: 'g',
    criteria: ['xxox']
  },
  {
    id: 'l_corner',
    key: 'h',
    criteria: ['ooxx']
  },
  {
    id: 'l_corner_h',
    key: 'h.h',
    criteria: ['oxxo']
  },
  {
    id: 'r_corner',
    key: 'k',
    criteria: ['xoox'],
    criteria2: ['xx','xo']
  },
  {
    id: 'r_corner_h',
    key: 'k.h',
    criteria: ['xxoo'],
    criteria2: ['xx','ox']
  },
  {
    id: 'v',
    key: 'd',
    criteria: ['oxox']
  },
  {
    id: 'dot',
    key: 'o',
    criteria: ['xxxx']
  },
  {
    id: 'v_down_edge',
    key: 'c',
    criteria: ['oxxx']
  },
  {
    id: 'block_edge',
    key: '',
    criteria: ['ooox'],
    criteria2: ['oo', 'ox']
  },
  {
    id: 'block_edge_h',
    key: '',
    criteria: ['oxoo'],
    criteria2: ['oo','xo']
  },
  {
    id: 'block',
    key: 'p',
    criteria: ['oooo','xooo'],
    criteria2: ['oo']
  },
  {
    id: 'block_corner',
    key: '',
    criteria: ['xoox'],
    criteria2: ['oo','ox']
  },
  {
    id: 'block_corner_h',
    key: 'p',
    criteria: ['xxoo'],
    criteria2: ['xo','oo']
  },
  {
    id: 'block_r_joint',
    key: '',
    criteria: ['oooo','xooo'],
    criteria2: ['xo']
  },
  {
    id: 'block_r_joint_h',
    key: 'p',
    criteria: ['oooo','xooo'],
    criteria2: ['ox']
  },
  {
    id: 'block_edge_r_joint',
    key: '',
    criteria: ['ooox'],
    criteria2: ['xo','xx']
  },
  {
    id: 'block_edge_r_joint_h',
    key: 'p',
    criteria: ['oxoo'],
    criteria2: ['ox','xx']
  },
  {
    key: 'ab',
    id: 'top_dot',
  },
  {
    key: 'ab.h',
    id: 'top_dot_h',
  },
  {
    key: 'ac',
    id: 'bottom_dot',
  },
  {
    key: 'ac.h',
    id: 'bottom_dot_h',
  },
  {
    id: 'floor',
    key: 'p',
  },
]

export {
  tiles
}