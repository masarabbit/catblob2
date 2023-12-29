// const mapData = {
//   one: {
//     column: 30,
//     row: 20,
//     map: 'zz31,k1,a11,e1,a4,k.h1,p1,k1,a3,x.h1,x1,a2,k.h1,zz2,q1,p11,c1,p4,q.h1,p1,q1,p3,h1,h.h1,p2,q.h1,zz2,d1,p6,g3,p7,c1,p1,c1,p7,d1,zz2,d1,p6,c3,p13,k1,k.h1,p2,d1,zz2,d1,p7,b1,b.h1,p13,j1,j.h1,p2,d1,zz2,d1,p22,h1,h.h1,p2,d1,zz2,d1,p26,d1,zz2,d1,p3,g1,p14,b1,a4,k.h1,p2,d1,zz2,d1,p3,c1,p19,q.h1,p2,d1,zz2,d1,p8,o1,p7,b1,a1,e1,b.h1,p3,d1,p2,d1,zz2,d1,p5,o1,p3,o1,p8,q1,p4,d1,p2,d1,zz2,d1,p8,o1,p3,n1,n.h1,p4,f1,p4,i.h1,p2,d1,zz2,d1,p12,r.h1,m.h1,p1,b1,a7,h.h1,p2,d1,zz2,d1,p2,n1,l1,n.h1,p5,n1,l2,m.h1,p12,d1,zz2,d1,p2,h1,a1,h.h1,p5,h1,a2,h.h1,p12,d1,zz2,d1,p26,d1,zz2,i1,p26,i.h1,zz2,h1,a16,b.h1,p2,b1,a6,h.h1,zz31',
//     walls: '$14,2,$17,8,$2,8,$7,1,$4,8,$2,5,$2,1,$3,1,$3,1,$2,5,$2,10,$2,9,$2,4,$4,16,$2,2,$2,4,$4,16,$2,2,$2,4,$6,18,$2,4,$6,18,$4,2,$4,20,$4,2,$1,1,$2,20,$2,28,$2,28,$2,28,$15,1,$29,1,$29,1,$135',
//   },
//   test: {
//     column: 20,
//     row: 10,
//     events: {
//       80: { event: 'transport', gateway: 'portal2' },
//       100: { event: 'transport', gateway: 'portal2' },
//     },
//     map: 'ac1,c2,ac1,c7,ac2,c9,ac1,c4,ac1,c2,ac1,c6,ac2,c3,w12,c1,ac1,c6,w3,v1,w6,v1,w1,ac1,c5,w18,c2,w2,v1,w6,v1,w8,c2,ac1,c1,w3,v1,w9,v1,w2,c1,ac1,c2,w16,ac2,c1,ac2,c2,ac2,c3,ac1,c13,ac1,c6,ac2,c3,ac2,c2',
//     walls: '$42,12,$8,12,$6,18,$2,18,$4,16,$4,16,$42',
//   },
//   tileDesign: {
//     column: 36,
//     row: 30,
//     map: '$1,z1,$1,zz18,z1,zz14,z1,o1,z1,zz17,y1,zz1,y1,zz13,$1,z1,$1,zz18,y1,zz50,z1,y1,z1,zz1,z2,y1,zz1,z3,zz1,z3,zz1,z3,zz1,z3,zz1,z3,zz1,y1,z2,zz5,z1,c1,z1,zz1,z1,o1,z1,zz1,z1,b1,y1,zz1,z1,o1,z1,zz1,z1,g1,z1,zz1,z1,o1,z1,zz1,y1,b.h1,z1,zz1,z1,o1,z1,zz5,z3,zz1,z3,zz1,z3,zz1,z2,y1,zz1,z1,y1,z1,zz1,y1,z2,zz1,z3,zz1,z3,zz41,z1,y2,zz1,z2,y1,zz1,z3,zz1,z3,zz1,z3,zz1,z3,zz1,y1,z2,zz1,y2,z1,zz5,z1,c1,z1,zz1,z1,b1,y1,zz1,z1,b1,y1,zz1,z1,g1,z1,zz1,z1,g1,z1,zz1,y1,b.h1,z1,zz1,y1,b.h1,z1,zz1,z1,c1,z1,zz5,z3,zz1,z3,zz1,z2,y1,zz1,z1,y2,zz1,y2,z1,zz1,y1,z2,zz1,z3,zz1,z3,zz41,z3,zz1,z3,zz1,z3,zz1,z3,zz1,z3,zz1,z3,zz1,z3,zz1,z3,zz5,z1,zz1,z1,zz1,z1,zz1,z1,zz1,z1,zz1,z1,zz1,z1,zz1,z1,zz1,z1,zz1,z1,zz1,z1,zz1,z1,zz1,z1,zz1,z1,zz1,z1,zz1,z1,zz5,z3,zz1,z3,zz1,z3,zz1,z3,zz1,z3,zz1,z3,zz1,z3,zz1,z3,zz41,z1,y2,zz1,z2,y1,zz1,z3,zz1,z3,zz1,z3,zz1,y1,z2,zz1,y2,z1,zz1,y3,zz5,z1,h1,y1,zz1,z1,b1,y1,zz1,z1,n1,y1,zz1,z1,g1,z1,zz1,y1,n.h1,z1,zz1,y1,b.h1,z1,zz1,y1,h.h1,z1,zz1,z1,c1,z1,zz5,z3,zz1,z2,y1,zz1,z1,y2,zz1,y3,zz1,y2,z1,zz1,y1,z2,zz1,z3,zz1,z3,zz41,z1,y2,zz1,$1,y1,$1,zz1,y2,z1,zz1,$1,y1,$1,zz2,z3,zz16,z1,m1,y1,zz1,y1,e1,y1,zz1,y1,m.h1,z1,zz1,y1,a1,y1,zz2,y1,zz1,y1,zz16,z1,y2,zz1,z1,y1,z1,zz1,y2,z1,zz1,z3,zz2,y3,zz2,z2,$1,zz33,z1,k1,y1,zz11,$1,y1,$1,zz1,$1,z1,$1,zz5,$1,y1,$1,zz2,z2,y1,zz2,$1,y1,z1,zz11,z1,d1,z1,zz1,y1,a1,y1,zz5,y1,l1,y1,zz2,z1,o1,z1,zz16,$1,y1,$1,zz1,$1,z1,$1,zz5,y3,zz2,y1,z2,zz87,1,zz31',
//     walls: '',
//   },
//   smallSprite: {
//     column: 10,
//     row: 3,
//     map: 'b1,a1,e1,b.h1,g1,h1,h.h1,k1,k.h1,d1,o1,c1,m1,m.h1,l1,n1,n.h1,x1,x.h1,za1,za.h1,p9',
//     walls: '',
//   }
// }

const mapData =  {
  surprise_mark: {
  tiles: '5,$5,12,$2,8,$1,d1,12,$1,3,$1,5,$1,2,$2,8,$2,5,$1,2,$2,7,m1,$1,5,$5',
  column: 10,
  row: 10,
  walls: '',
  },
  cyclone: {
    tiles: '9,$1,3,d1,8,$1,2,$3,4,$1,9,$1,1,$2,8,$2,1,$1,8,m1,$1,2,$5,2,$1,11,$1,9,$1',
    column: 10,
    row: 10,
    walls: '',
  },
  eye: {
    tiles: '$2,6,$3,8,$1,2,d1,4,m1,6,$2,7,$4,6,$4,7,$2,6,m1,4,d1,2,$1,8,$3,6,$2',
    column: 10,
    row: 10,
    walls: '',
  },
  broken_flag: {
    tiles: '21,$4,7,$1,m1,1,$1,2,d1,22,$1,2,$1,2,$1,3,$1,3,$4,2,$1,1,m1,7,$1,8',
    column: 10,
    row: 10,
    walls: '',
  },
  dots: {
    tiles: '1,$1,2,$1,2,$1,20,d1,1,$1,2,$1,2,$1,2,$1,21,$1,2,$1,2,$1,4,m1,17,$1,2,$1,2,$1,2,$1',
    column: 10,
    row: 10,
    walls: '',
  },
  vertical_river: {
    tiles: '17,$1,6,d1,2,$1,4,$1,4,$1,3,$2,1,$1,2,$1,3,$1,2,$2,1,$1,6,$2,5,$1,2,$2,1,m1,6,$1,15',
    column: 10,
    row: 10,
    walls: '',
  },
  target: {
    tiles: '15,d1,6,$3,1,$2,4,$1,5,$1,1,$1,7,$1,1,$1,3,m1,1,m1,5,$1,9,$2,4,$1,3,$3,1,$3,11',
    column: 10,
    row: 10,
    walls: '',
  },
  r: {
    tiles: '18,d1,4,$2,1,$2,4,$6,4,$5,5,$3,7,$2,1,m1,6,$3,8,$2,7,$3,5',
    column: 10,
    row: 10,
    walls: '',
  },
  s: {
    tiles: '23,$4,5,$8,2,$2,4,m1,4,$4,9,$2,2,$1,1,$5,7,d1,15',
    column: 10,
    row: 10,
    walls: '',
  },
  dash_dot_dot_dash: {
    tiles: '20,$5,5,$5,2,$1,d1,1,$5,21,$4,1,$1,1,m1,2,$4,20',
    column: 10,
    row: 10,
    walls: '',
  },
  i: {
    tiles: '12,d1,12,$2,7,$3,7,$2,m1,6,$4,6,$4,6,m1,$3,6,$4,6,$3,4',
    column: 10,
    row: 10,
    walls: '',
  },
  random1: {
    tiles: '$4,6,$2,5,$2,2,$2,3,$2,6,d1,5,$2,6,$5,4,$2,2,$1,9,m1,1,$1,3,m1,$1,5,$1,14,$1',
    column: 10,
    row: 10,
    walls: '',
  },
  random2: {
    tiles: '1,$2,1,$1,4,$1,1,$2,12,$3,4,d1,2,$1,8,$2,1,$1,2,$1,5,$1,5,$3,2,$3,1,m1,1,$1,2,m1,2,$1,2,$1,1,$1,4,$1,10',
    column: 10,
    row: 10,
    walls: '',
  },
  ya: {
    tiles: '23,$1,1,d1,1,$1,4,$6,4,$6,5,$2,1,$2,5,$2,1,$2,2,$1,2,$2,5,$1,2,m1,6,$1,6,$3',
    column: 10,
    row: 10,
    walls: '',
  },
  random3: {
    tiles: '1,$2,3,$1,1,$2,9,$1,2,$1,1,$2,4,$1,1,$2,1,$1,6,$1,4,d1,4,$1,1,m1,8,$1,3,$1,3,$1,1,$2,3,m1,2,$1,14,$1,3',
    column: 10,
    row: 10,
    walls: '',
  },
  random4: {
    tiles: '$1,4,$1,4,$2,5,$1,6,$1,8,$1,4,$1,1,$2,4,d1,2,$1,11,m1,7,$1,3,$1,1,$3,1,$3,1,$4,m1,1,$1,5,$3,2',
    column: 10,
    row: 10,
    walls: '',
  },
  target2: {
    tiles: '12,$3,1,$3,3,$1,11,$1,3,$1,2,d1,2,$3,5,$1,1,$1,m1,6,$1,5,$1,4,$2,1,$2,2,$1,9,$1,9',
    column: 10,
    row: 10,
    walls: '',
  },
  random5: {
    tiles: '8,$1,9,$1,2,$2,2,d1,7,$1,2,$3,4,$1,7,$1,3,$1,1,$1,5,m1,2,$2,8,$1,4,$2,2,$1,1,$1,12',
    column: 10,
    row: 10,
    walls: '',
  },
  random6: {
    tiles: '5,$1,5,$1,6,m1,1,$2,1,d1,6,$2,4,$1,2,$1,3,$1,6,$1,2,$4,1,$2,2,m1,3,$2,5,$1,1,$1,3,$3,5,$6,7',
    column: 10,
    row: 10,
    walls: '',
  },
  block: {
    tiles: '18,d1,3,b6,4,b6,4,b2,1,m1,b2,4,b2,m1,1,b2,4,b6,4,b6,3,d1,18',
    column: 10,
    row: 10,
    walls: '',
  },
  block2: {
    tiles: '11,b8,2,b8,2,b2,m1,1,b4,2,b2,2,b4,2,b8,2,b5,2,b1,2,b5,1,d1,b1,2,b8,11',
    column: 10,
    row: 10,
    walls: '',
  },
}

export {
  mapData
}