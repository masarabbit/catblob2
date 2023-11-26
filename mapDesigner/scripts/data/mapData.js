const mapData = {
  one: {
    column: 30,
    row: 20,
    map: 'zz31,k1,a11,e1,a4,k.h1,p1,k1,a3,x.h1,x1,a2,k.h1,zz2,q1,p11,c1,p4,q.h1,p1,q1,p3,h1,h.h1,p2,q.h1,zz2,d1,p6,g3,p7,c1,p1,c1,p7,d1,zz2,d1,p6,c3,p13,k1,k.h1,p2,d1,zz2,d1,p7,b1,b.h1,p13,j1,j.h1,p2,d1,zz2,d1,p22,h1,h.h1,p2,d1,zz2,d1,p26,d1,zz2,d1,p3,g1,p14,b1,a4,k.h1,p2,d1,zz2,d1,p3,c1,p19,q.h1,p2,d1,zz2,d1,p8,o1,p7,b1,a1,e1,b.h1,p3,d1,p2,d1,zz2,d1,p5,o1,p3,o1,p8,q1,p4,d1,p2,d1,zz2,d1,p8,o1,p3,n1,n.h1,p4,f1,p4,i.h1,p2,d1,zz2,d1,p12,r.h1,m.h1,p1,b1,a7,h.h1,p2,d1,zz2,d1,p2,n1,l1,n.h1,p5,n1,l2,m.h1,p12,d1,zz2,d1,p2,h1,a1,h.h1,p5,h1,a2,h.h1,p12,d1,zz2,d1,p26,d1,zz2,i1,p26,i.h1,zz2,h1,a16,b.h1,p2,b1,a6,h.h1,zz31',
    walls: '$14,2,$17,8,$2,8,$7,1,$4,8,$2,5,$2,1,$3,1,$3,1,$2,5,$2,10,$2,9,$2,4,$4,16,$2,2,$2,4,$4,16,$2,2,$2,4,$6,18,$2,4,$6,18,$4,2,$4,20,$4,2,$1,1,$2,20,$2,28,$2,28,$2,28,$15,1,$29,1,$29,1,$135',
  },
  test: {
    column: 20,
    row: 10,
    events: {
      80: { event: 'transport', gateway: 'portal2' },
      100: { event: 'transport', gateway: 'portal2' },
    },
    map: 'ac1,c2,ac1,c7,ac2,c9,ac1,c4,ac1,c2,ac1,c6,ac2,c3,w12,c1,ac1,c6,w3,v1,w6,v1,w1,ac1,c5,w18,c2,w2,v1,w6,v1,w8,c2,ac1,c1,w3,v1,w9,v1,w2,c1,ac1,c2,w16,ac2,c1,ac2,c2,ac2,c3,ac1,c13,ac1,c6,ac2,c3,ac2,c2',
    walls: '$42,12,$8,12,$6,18,$2,18,$4,16,$4,16,$42',
  },
  tileDesign: {
    column: 36,
    row: 30,
    map: '$1,z1,$1,zz18,z1,zz14,z1,o1,z1,zz17,y1,zz1,y1,zz13,$1,z1,$1,zz18,y1,zz50,z1,y1,z1,zz1,z2,y1,zz1,z3,zz1,z3,zz1,z3,zz1,z3,zz1,z3,zz1,y1,z2,zz5,z1,c1,z1,zz1,z1,o1,z1,zz1,z1,b1,y1,zz1,z1,o1,z1,zz1,z1,g1,z1,zz1,z1,o1,z1,zz1,y1,b.h1,z1,zz1,z1,o1,z1,zz5,z3,zz1,z3,zz1,z3,zz1,z2,y1,zz1,z1,y1,z1,zz1,y1,z2,zz1,z3,zz1,z3,zz41,z1,y2,zz1,z2,y1,zz1,z3,zz1,z3,zz1,z3,zz1,z3,zz1,y1,z2,zz1,y2,z1,zz5,z1,c1,z1,zz1,z1,b1,y1,zz1,z1,b1,y1,zz1,z1,g1,z1,zz1,z1,g1,z1,zz1,y1,b.h1,z1,zz1,y1,b.h1,z1,zz1,z1,c1,z1,zz5,z3,zz1,z3,zz1,z2,y1,zz1,z1,y2,zz1,y2,z1,zz1,y1,z2,zz1,z3,zz1,z3,zz41,z3,zz1,z3,zz1,z3,zz1,z3,zz1,z3,zz1,z3,zz1,z3,zz1,z3,zz5,z1,zz1,z1,zz1,z1,zz1,z1,zz1,z1,zz1,z1,zz1,z1,zz1,z1,zz1,z1,zz1,z1,zz1,z1,zz1,z1,zz1,z1,zz1,z1,zz1,z1,zz1,z1,zz5,z3,zz1,z3,zz1,z3,zz1,z3,zz1,z3,zz1,z3,zz1,z3,zz1,z3,zz41,z1,y2,zz1,z2,y1,zz1,z3,zz1,z3,zz1,z3,zz1,y1,z2,zz1,y2,z1,zz1,y3,zz5,z1,h1,y1,zz1,z1,b1,y1,zz1,z1,n1,y1,zz1,z1,g1,z1,zz1,y1,n.h1,z1,zz1,y1,b.h1,z1,zz1,y1,h.h1,z1,zz1,z1,c1,z1,zz5,z3,zz1,z2,y1,zz1,z1,y2,zz1,y3,zz1,y2,z1,zz1,y1,z2,zz1,z3,zz1,z3,zz41,z1,y2,zz1,$1,y1,$1,zz1,y2,z1,zz1,$1,y1,$1,zz2,z3,zz16,z1,m1,y1,zz1,y1,e1,y1,zz1,y1,m.h1,z1,zz1,y1,a1,y1,zz2,y1,zz1,y1,zz16,z1,y2,zz1,z1,y1,z1,zz1,y2,z1,zz1,z3,zz2,y3,zz2,z2,$1,zz33,z1,k1,y1,zz11,$1,y1,$1,zz1,$1,z1,$1,zz5,$1,y1,$1,zz2,z2,y1,zz2,$1,y1,z1,zz11,z1,d1,z1,zz1,y1,a1,y1,zz5,y1,l1,y1,zz2,z1,o1,z1,zz16,$1,y1,$1,zz1,$1,z1,$1,zz5,y3,zz2,y1,z2,zz87,1,zz31',
    walls: '',
  },
  smallSprite: {
    column: 10,
    row: 3,
    map: 'b1,a1,e1,b.h1,g1,h1,h.h1,k1,k.h1,d1,o1,c1,m1,m.h1,l1,n1,n.h1,x1,x.h1,za1,za.h1,p9',
    walls: '',
  }
}

export {
  mapData
}