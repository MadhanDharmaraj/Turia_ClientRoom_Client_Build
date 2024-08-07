(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[112],{1366:function(e,o,c){"use strict";c.r(o);var n=c(0),a=c(449),r=c.n(a),i=c(706),t=c(701),s=c(13),d=c(2),l=Object(d.jsx)("pre",{children:Object(d.jsx)("code",{className:"language-jsx",children:"import { useState } from 'react'\nimport { Accordion, AccordionBody, AccordionHeader, AccordionItem } from 'reactstrap'\n\nconst AccordionBasic = () => {\n  const [open, setOpen] = useState('1')\n\n  const toggle = id => {\n    open === id ? setOpen() : setOpen(id)\n  }\n\n  return (\n    <Accordion open={open} toggle={toggle}>\n      <AccordionItem>\n        <AccordionHeader targetId='1'>Accordion Item 1</AccordionHeader>\n        <AccordionBody accordionId='1'>\n          <strong>This is the first item's accordion body.</strong> You can modify any of this with custom CSS or\n          overriding our default variables. It's also worth noting that just about any HTML can go within the{' '}\n          <code>&lt;AccordionBody&gt;</code>, though the transition does limit overflow.\n        </AccordionBody>\n      </AccordionItem>\n      <AccordionItem>\n        <AccordionHeader targetId='2'>Accordion Item 2</AccordionHeader>\n        <AccordionBody accordionId='2'>\n          <strong>This is the second item's accordion body.</strong> You can modify any of this with custom CSS or\n          overriding our default variables. It's also worth noting that just about any HTML can go within the{' '}\n          <code>&lt;AccordionBody&gt;</code>, though the transition does limit overflow.\n        </AccordionBody>\n      </AccordionItem>\n      <AccordionItem>\n        <AccordionHeader targetId='3'>Accordion Item 3</AccordionHeader>\n        <AccordionBody accordionId='3'>\n          <strong>This is the third item's accordion body.</strong> You can modify any of this with custom CSS or\n          overriding our default variables. It's also worth noting that just about any HTML can go within the{' '}\n          <code>&lt;AccordionBody&gt;</code>, though the transition does limit overflow.\n        </AccordionBody>\n      </AccordionItem>\n    </Accordion>\n  )\n}\n\nexport default AccordionBasic"})}),m=Object(d.jsx)("pre",{children:Object(d.jsx)("code",{className:"language-jsx",children:"import { useState } from 'react'\nimport { Accordion, AccordionBody, AccordionHeader, AccordionItem } from 'reactstrap'\n\nconst AccordionWithoutArrow = () => {\n  const [open, setOpen] = useState('1')\n\n  const toggle = id => {\n    open === id ? setOpen() : setOpen(id)\n  }\n\n  return (\n    <Accordion className='accordion-without-arrow' open={open} toggle={toggle}>\n      <AccordionItem>\n        <AccordionHeader targetId='1'>Accordion Item 1</AccordionHeader>\n        <AccordionBody accordionId='1'>\n          Lemon drops chocolate cake gummies carrot cake chupa chups muffin topping. Sesame snaps icing marzipan gummi\n          bears macaroon drag\xe9e danish caramels powder. Bear claw drag\xe9e pastry topping souffl\xe9. Wafer gummi bears\n          marshmallow pastry pie.\n        </AccordionBody>\n      </AccordionItem>\n      <AccordionItem>\n        <AccordionHeader targetId='2'>Accordion Item 2</AccordionHeader>\n        <AccordionBody accordionId='2'>\n          Dessert ice cream donut oat cake jelly-o pie sugar plum cheesecake. Bear claw drag\xe9e oat cake drag\xe9e ice cream\n          halvah tootsie roll. Danish cake oat cake pie macaroon tart donut gummies. Jelly beans candy canes carrot\n          cake. Fruitcake chocolate chupa chups.\n        </AccordionBody>\n      </AccordionItem>\n      <AccordionItem>\n        <AccordionHeader targetId='3'>Accordion Item 3</AccordionHeader>\n        <AccordionBody accordionId='3'>\n          Oat cake toffee chocolate bar jujubes. Marshmallow brownie lemon drops cheesecake. Bonbon gingerbread\n          marshmallow sweet jelly beans muffin. Sweet roll bear claw candy canes oat cake drag\xe9e caramels. Ice cream\n          wafer danish cookie caramels muffin.\n        </AccordionBody>\n      </AccordionItem>\n      <AccordionItem>\n        <AccordionHeader targetId='4'>Accordion Item 4</AccordionHeader>\n        <AccordionBody accordionId='4'>\n          Pastry pudding cookie toffee bonbon jujubes jujubes powder topping. Jelly beans gummi bears sweet roll bonbon\n          muffin liquorice. Wafer lollipop sesame snaps. Brownie macaroon cookie claw candy canes muffin cupcake candy\n          caramels tiramisu.\n        </AccordionBody>\n      </AccordionItem>\n    </Accordion>\n  )\n}\n\nexport default AccordionWithoutArrow\n"})}),u=Object(d.jsx)("pre",{children:Object(d.jsx)("code",{className:"language-jsx",children:"import { useState } from 'react'\nimport { Accordion, AccordionBody, AccordionHeader, AccordionItem } from 'reactstrap'\n\nconst AccordionBorder = () => {\n  const [open, setOpen] = useState('')\n\n  const toggle = id => {\n    open === id ? setOpen() : setOpen(id)\n  }\n\n  return (\n    <Accordion className='accordion-border' open={open} toggle={toggle}>\n      <AccordionItem>\n        <AccordionHeader targetId='1'>Accordion Item 1</AccordionHeader>\n        <AccordionBody accordionId='1'>\n          Gummi bears toffee souffl\xe9 jelly carrot cake pudding sweet roll bear claw. Sweet roll gingerbread wafer\n          liquorice cake tiramisu. Gummi bears caramels bonbon icing croissant lollipop topping lollipop danish.\n          Marzipan tootsie roll bonbon toffee icing lollipop cotton candy pie gummies. Gingerbread bear claw chocolate\n          cake bonbon. Liquorice marzipan cotton candy liquorice tootsie roll macaroon marzipan danish.\n        </AccordionBody>\n      </AccordionItem>\n      <AccordionItem>\n        <AccordionHeader targetId='2'>Accordion Item 2</AccordionHeader>\n        <AccordionBody accordionId='2'>\n          Souffl\xe9 sugar plum bonbon lemon drops candy canes icing brownie. Dessert tart dessert apple pie. Muffin wafer\n          cookie. Souffl\xe9 fruitcake lollipop chocolate bar. Muffin gummi bears marzipan sesame snaps gummi bears topping\n          toffee. Cupcake bonbon muffin. Cake caramels candy lollipop cheesecake bonbon souffl\xe9 apple pie cake.\n        </AccordionBody>\n      </AccordionItem>\n      <AccordionItem>\n        <AccordionHeader targetId='3'>Accordion Item 3</AccordionHeader>\n        <AccordionBody accordionId='3'>\n          <strong>This is the third item's accordion body.</strong> You can modify any of this with custom CSS or\n          overriding our default variables. It's also worth noting that just about any HTML can go within the{' '}\n          <code>&lt;AccordionBody&gt;</code>, though the transition does limit overflow.\n        </AccordionBody>\n      </AccordionItem>\n      <AccordionItem>\n        <AccordionHeader targetId='4'>Accordion Item 4</AccordionHeader>\n        <AccordionBody accordionId='4'>\n          Marzipan candy apple pie icing. Sweet roll pudding drag\xe9e icing icing cookie pie fruitcake caramels. Bonbon\n          candy canes candy canes. Drag\xe9e jelly beans chocolate bar drag\xe9e biscuit fruitcake gingerbread toffee apple\n          pie. Gingerbread donut powder ice cream sesame snaps jelly beans oat cake. Candy wafer pudding drag\xe9e gummies.\n          Carrot cake macaroon cake sesame snaps caramels.\n        </AccordionBody>\n      </AccordionItem>\n    </Accordion>\n  )\n}\nexport default AccordionBorder\n"})}),b=Object(d.jsx)("pre",{children:Object(d.jsx)("code",{className:"language-jsx",children:"import { useState } from 'react'\nimport { Accordion, AccordionBody, AccordionHeader, AccordionItem } from 'reactstrap'\n\nconst AccordionMargin = () => {\n  const [open, setOpen] = useState('')\n\n  const toggle = id => {\n    open === id ? setOpen() : setOpen(id)\n  }\n\n  return (\n    <Accordion className='accordion-margin' open={open} toggle={toggle}>\n      <AccordionItem>\n        <AccordionHeader targetId='1'>Accordion Item 1</AccordionHeader>\n        <AccordionBody accordionId='1'>\n          Pastry pudding cookie toffee bonbon jujubes jujubes powder topping. Jelly beans gummi bears sweet roll bonbon\n          muffin liquorice. Wafer lollipop sesame snaps. Brownie macaroon cookie muffin cupcake candy caramels tiramisu.\n          Oat cake chocolate cake sweet jelly-o brownie biscuit marzipan. Jujubes donut marzipan chocolate bar. Jujubes\n          sugar plum jelly beans tiramisu icing cheesecake.\n        </AccordionBody>\n      </AccordionItem>\n      <AccordionItem>\n        <AccordionHeader targetId='2'>Accordion Item 2</AccordionHeader>\n        <AccordionBody accordionId='2'>\n          Sweet pie candy jelly. Sesame snaps biscuit sugar plum. Sweet roll topping fruitcake. Caramels liquorice\n          biscuit ice cream fruitcake cotton candy tart. Donut caramels gingerbread jelly-o gingerbread pudding. Gummi\n          bears pastry marshmallow candy canes pie. Pie apple pie carrot cake.\n        </AccordionBody>\n      </AccordionItem>\n      <AccordionItem>\n        <AccordionHeader targetId='3'>Accordion Item 3</AccordionHeader>\n        <AccordionBody accordionId='3'>\n          Tart gummies drag\xe9e lollipop fruitcake pastry oat cake. Cookie jelly jelly macaroon icing jelly beans souffl\xe9\n          cake sweet. Macaroon sesame snaps cheesecake tart cake sugar plum. Dessert jelly-o sweet muffin chocolate\n          candy pie tootsie roll marzipan. Carrot cake marshmallow pastry. Bonbon biscuit pastry topping toffee dessert\n          gummies. Topping apple pie pie croissant cotton candy dessert tiramisu.\n        </AccordionBody>\n      </AccordionItem>\n      <AccordionItem>\n        <AccordionHeader targetId='4'>Accordion Item 4</AccordionHeader>\n        <AccordionBody accordionId='4'>\n          Cheesecake muffin cupcake drag\xe9e lemon drops tiramisu cake gummies chocolate cake. Marshmallow tart croissant.\n          Tart dessert tiramisu marzipan lollipop lemon drops. Cake bonbon bonbon gummi bears topping jelly beans\n          brownie jujubes muffin. Donut croissant jelly-o cake marzipan. Liquorice marzipan cookie wafer tootsie roll.\n          Tootsie roll sweet cupcake.\n        </AccordionBody>\n      </AccordionItem>\n    </Accordion>\n  )\n}\nexport default AccordionMargin"})}),p=Object(d.jsx)("pre",{children:Object(d.jsx)("code",{className:"language-jsx",children:"import { useState } from 'react'\nimport { Accordion, AccordionBody, AccordionHeader, AccordionItem } from 'reactstrap'\n\nconst AccordionHover = () => {\n  const [open, setOpen] = useState('')\n\n  const toggle = id => {\n    open === id ? setOpen() : setOpen(id)\n  }\n\n  return (\n    <Accordion open={open} toggle={toggle}>\n      <AccordionItem onMouseEnter={() => toggle('1')} onMouseLeave={() => toggle('1')}>\n        <AccordionHeader targetId='1'>Accordion Item 1</AccordionHeader>\n        <AccordionBody accordionId='1'>\n          Gummi bears toffee souffl\xe9 jelly carrot cake pudding sweet roll bear claw. Sweet roll gingerbread wafer\n          liquorice cake tiramisu. Gummi bears caramels bonbon icing croissant lollipop topping lollipop danish.\n          Marzipan tootsie roll bonbon toffee icing lollipop cotton candy pie gummies. Gingerbread bear claw chocolate\n          cake bonbon. Liquorice marzipan cotton candy liquorice tootsie roll macaroon marzipan danish.\n        </AccordionBody>\n      </AccordionItem>\n      <AccordionItem onMouseEnter={() => toggle('2')} onMouseLeave={() => toggle('2')}>\n        <AccordionHeader targetId='2'>Accordion Item 2</AccordionHeader>\n        <AccordionBody accordionId='2'>\n          Souffl\xe9 sugar plum bonbon lemon drops candy canes icing brownie. Dessert tart dessert apple pie. Muffin wafer\n          cookie. Souffl\xe9 fruitcake lollipop chocolate bar. Muffin gummi bears marzipan sesame snaps gummi bears topping\n          toffee. Cupcake bonbon muffin. Cake caramels candy lollipop cheesecake bonbon souffl\xe9 apple pie cake.\n        </AccordionBody>\n      </AccordionItem>\n      <AccordionItem onMouseEnter={() => toggle('3')} onMouseLeave={() => toggle('3')}>\n        <AccordionHeader targetId='3'>Accordion Item 3</AccordionHeader>\n        <AccordionBody accordionId='3'>\n          Souffl\xe9 sugar plum bonbon lemon drops candy canes icing brownie. Dessert tart dessert apple pie. Muffin wafer\n          cookie. Souffl\xe9 fruitcake lollipop chocolate bar. Muffin gummi bears marzipan sesame snaps gummi bears topping\n          toffee. Cupcake bonbon muffin. Cake caramels candy lollipop cheesecake bonbon souffl\xe9 apple pie cake.\n        </AccordionBody>\n      </AccordionItem>\n      <AccordionItem onMouseEnter={() => toggle('4')} onMouseLeave={() => toggle('4')}>\n        <AccordionHeader targetId='4'>Accordion Item 4</AccordionHeader>\n        <AccordionBody accordionId='4'>\n          Marzipan candy apple pie icing. Sweet roll pudding drag\xe9e icing icing cookie pie fruitcake caramels. Bonbon\n          candy canes candy canes. Drag\xe9e jelly beans chocolate bar drag\xe9e biscuit fruitcake gingerbread toffee apple\n          pie. Gingerbread donut powder ice cream sesame snaps jelly beans oat cake. Candy wafer pudding drag\xe9e gummies.\n          Carrot cake macaroon cake sesame snaps caramels.\n        </AccordionBody>\n      </AccordionItem>\n    </Accordion>\n  )\n}\nexport default AccordionHover\n"})}),j=c(9),g=function(){var e=Object(n.useState)(""),o=Object(j.a)(e,2),c=o[0],a=o[1],r=function(e){c===e?a():a(e)};return Object(d.jsxs)(s.a,{open:c,toggle:r,children:[Object(d.jsxs)(s.d,{onMouseEnter:function(){return r("1")},onMouseLeave:function(){return r("1")},children:[Object(d.jsx)(s.c,{targetId:"1",children:"Accordion Item 1"}),Object(d.jsx)(s.b,{accordionId:"1",children:"Gummi bears toffee souffl\xe9 jelly carrot cake pudding sweet roll bear claw. Sweet roll gingerbread wafer liquorice cake tiramisu. Gummi bears caramels bonbon icing croissant lollipop topping lollipop danish. Marzipan tootsie roll bonbon toffee icing lollipop cotton candy pie gummies. Gingerbread bear claw chocolate cake bonbon. Liquorice marzipan cotton candy liquorice tootsie roll macaroon marzipan danish."})]}),Object(d.jsxs)(s.d,{onMouseEnter:function(){return r("2")},onMouseLeave:function(){return r("2")},children:[Object(d.jsx)(s.c,{targetId:"2",children:"Accordion Item 2"}),Object(d.jsx)(s.b,{accordionId:"2",children:"Souffl\xe9 sugar plum bonbon lemon drops candy canes icing brownie. Dessert tart dessert apple pie. Muffin wafer cookie. Souffl\xe9 fruitcake lollipop chocolate bar. Muffin gummi bears marzipan sesame snaps gummi bears topping toffee. Cupcake bonbon muffin. Cake caramels candy lollipop cheesecake bonbon souffl\xe9 apple pie cake."})]}),Object(d.jsxs)(s.d,{onMouseEnter:function(){return r("3")},onMouseLeave:function(){return r("3")},children:[Object(d.jsx)(s.c,{targetId:"3",children:"Accordion Item 3"}),Object(d.jsx)(s.b,{accordionId:"3",children:"Souffl\xe9 sugar plum bonbon lemon drops candy canes icing brownie. Dessert tart dessert apple pie. Muffin wafer cookie. Souffl\xe9 fruitcake lollipop chocolate bar. Muffin gummi bears marzipan sesame snaps gummi bears topping toffee. Cupcake bonbon muffin. Cake caramels candy lollipop cheesecake bonbon souffl\xe9 apple pie cake."})]}),Object(d.jsxs)(s.d,{onMouseEnter:function(){return r("4")},onMouseLeave:function(){return r("4")},children:[Object(d.jsx)(s.c,{targetId:"4",children:"Accordion Item 4"}),Object(d.jsx)(s.b,{accordionId:"4",children:"Marzipan candy apple pie icing. Sweet roll pudding drag\xe9e icing icing cookie pie fruitcake caramels. Bonbon candy canes candy canes. Drag\xe9e jelly beans chocolate bar drag\xe9e biscuit fruitcake gingerbread toffee apple pie. Gingerbread donut powder ice cream sesame snaps jelly beans oat cake. Candy wafer pudding drag\xe9e gummies. Carrot cake macaroon cake sesame snaps caramels."})]})]})},h=function(){var e=Object(n.useState)(""),o=Object(j.a)(e,2),c=o[0],a=o[1];return Object(d.jsxs)(s.a,{className:"accordion-border",open:c,toggle:function(e){c===e?a():a(e)},children:[Object(d.jsxs)(s.d,{children:[Object(d.jsx)(s.c,{targetId:"1",children:"Accordion Item 1"}),Object(d.jsx)(s.b,{accordionId:"1",children:"Gummi bears toffee souffl\xe9 jelly carrot cake pudding sweet roll bear claw. Sweet roll gingerbread wafer liquorice cake tiramisu. Gummi bears caramels bonbon icing croissant lollipop topping lollipop danish. Marzipan tootsie roll bonbon toffee icing lollipop cotton candy pie gummies. Gingerbread bear claw chocolate cake bonbon. Liquorice marzipan cotton candy liquorice tootsie roll macaroon marzipan danish."})]}),Object(d.jsxs)(s.d,{children:[Object(d.jsx)(s.c,{targetId:"2",children:"Accordion Item 2"}),Object(d.jsx)(s.b,{accordionId:"2",children:"Souffl\xe9 sugar plum bonbon lemon drops candy canes icing brownie. Dessert tart dessert apple pie. Muffin wafer cookie. Souffl\xe9 fruitcake lollipop chocolate bar. Muffin gummi bears marzipan sesame snaps gummi bears topping toffee. Cupcake bonbon muffin. Cake caramels candy lollipop cheesecake bonbon souffl\xe9 apple pie cake."})]}),Object(d.jsxs)(s.d,{children:[Object(d.jsx)(s.c,{targetId:"3",children:"Accordion Item 3"}),Object(d.jsx)(s.b,{accordionId:"3",children:"Souffl\xe9 sugar plum bonbon lemon drops candy canes icing brownie. Dessert tart dessert apple pie. Muffin wafer cookie. Souffl\xe9 fruitcake lollipop chocolate bar. Muffin gummi bears marzipan sesame snaps gummi bears topping toffee. Cupcake bonbon muffin. Cake caramels candy lollipop cheesecake bonbon souffl\xe9 apple pie cake."})]}),Object(d.jsxs)(s.d,{children:[Object(d.jsx)(s.c,{targetId:"4",children:"Accordion Item 4"}),Object(d.jsx)(s.b,{accordionId:"4",children:"Marzipan candy apple pie icing. Sweet roll pudding drag\xe9e icing icing cookie pie fruitcake caramels. Bonbon candy canes candy canes. Drag\xe9e jelly beans chocolate bar drag\xe9e biscuit fruitcake gingerbread toffee apple pie. Gingerbread donut powder ice cream sesame snaps jelly beans oat cake. Candy wafer pudding drag\xe9e gummies. Carrot cake macaroon cake sesame snaps caramels."})]})]})},f=function(){var e=Object(n.useState)(""),o=Object(j.a)(e,2),c=o[0],a=o[1];return Object(d.jsxs)(s.a,{className:"accordion-margin",open:c,toggle:function(e){c===e?a():a(e)},children:[Object(d.jsxs)(s.d,{children:[Object(d.jsx)(s.c,{targetId:"1",children:"Accordion Item 1"}),Object(d.jsx)(s.b,{accordionId:"1",children:"Pastry pudding cookie toffee bonbon jujubes jujubes powder topping. Jelly beans gummi bears sweet roll bonbon muffin liquorice. Wafer lollipop sesame snaps. Brownie macaroon cookie muffin cupcake candy caramels tiramisu. Oat cake chocolate cake sweet jelly-o brownie biscuit marzipan. Jujubes donut marzipan chocolate bar. Jujubes sugar plum jelly beans tiramisu icing cheesecake."})]}),Object(d.jsxs)(s.d,{children:[Object(d.jsx)(s.c,{targetId:"2",children:"Accordion Item 2"}),Object(d.jsx)(s.b,{accordionId:"2",children:"Sweet pie candy jelly. Sesame snaps biscuit sugar plum. Sweet roll topping fruitcake. Caramels liquorice biscuit ice cream fruitcake cotton candy tart. Donut caramels gingerbread jelly-o gingerbread pudding. Gummi bears pastry marshmallow candy canes pie. Pie apple pie carrot cake."})]}),Object(d.jsxs)(s.d,{children:[Object(d.jsx)(s.c,{targetId:"3",children:"Accordion Item 3"}),Object(d.jsx)(s.b,{accordionId:"3",children:"Tart gummies drag\xe9e lollipop fruitcake pastry oat cake. Cookie jelly jelly macaroon icing jelly beans souffl\xe9 cake sweet. Macaroon sesame snaps cheesecake tart cake sugar plum. Dessert jelly-o sweet muffin chocolate candy pie tootsie roll marzipan. Carrot cake marshmallow pastry. Bonbon biscuit pastry topping toffee dessert gummies. Topping apple pie pie croissant cotton candy dessert tiramisu."})]}),Object(d.jsxs)(s.d,{children:[Object(d.jsx)(s.c,{targetId:"4",children:"Accordion Item 4"}),Object(d.jsx)(s.b,{accordionId:"4",children:"Cheesecake muffin cupcake drag\xe9e lemon drops tiramisu cake gummies chocolate cake. Marshmallow tart croissant. Tart dessert tiramisu marzipan lollipop lemon drops. Cake bonbon bonbon gummi bears topping jelly beans brownie jujubes muffin. Donut croissant jelly-o cake marzipan. Liquorice marzipan cookie wafer tootsie roll. Tootsie roll sweet cupcake."})]})]})},y=function(){var e=Object(n.useState)("1"),o=Object(j.a)(e,2),c=o[0],a=o[1];return Object(d.jsxs)(s.a,{open:c,toggle:function(e){c===e?a():a(e)},children:[Object(d.jsxs)(s.d,{children:[Object(d.jsx)(s.c,{targetId:"1",children:"Accordion Item 1"}),Object(d.jsxs)(s.b,{accordionId:"1",children:[Object(d.jsx)("strong",{children:"This is the first item's accordion body."})," You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the"," ",Object(d.jsx)("code",{children:"<AccordionBody>"}),", though the transition does limit overflow."]})]}),Object(d.jsxs)(s.d,{children:[Object(d.jsx)(s.c,{targetId:"2",children:"Accordion Item 2"}),Object(d.jsxs)(s.b,{accordionId:"2",children:[Object(d.jsx)("strong",{children:"This is the second item's accordion body."})," You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the"," ",Object(d.jsx)("code",{children:"<AccordionBody>"}),", though the transition does limit overflow."]})]}),Object(d.jsxs)(s.d,{children:[Object(d.jsx)(s.c,{targetId:"3",children:"Accordion Item 3"}),Object(d.jsxs)(s.b,{accordionId:"3",children:[Object(d.jsx)("strong",{children:"This is the third item's accordion body."})," You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the"," ",Object(d.jsx)("code",{children:"<AccordionBody>"}),", though the transition does limit overflow."]})]})]})},A=function(){return Object(d.jsxs)(s.rb,{defaultOpen:"1",children:[Object(d.jsxs)(s.d,{children:[Object(d.jsx)(s.c,{targetId:"1",children:"Accordion Item 1"}),Object(d.jsxs)(s.b,{accordionId:"1",children:[Object(d.jsx)("strong",{children:"This is the first item's accordion body."})," You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the"," ",Object(d.jsx)("code",{children:"<AccordionBody>"}),", though the transition does limit overflow."]})]}),Object(d.jsxs)(s.d,{children:[Object(d.jsx)(s.c,{targetId:"2",children:"Accordion Item 2"}),Object(d.jsxs)(s.b,{accordionId:"2",children:[Object(d.jsx)("strong",{children:"This is the second item's accordion body."})," You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the"," ",Object(d.jsx)("code",{children:"<AccordionBody>"}),", though the transition does limit overflow."]})]}),Object(d.jsxs)(s.d,{children:[Object(d.jsx)(s.c,{targetId:"3",children:"Accordion Item 3"}),Object(d.jsxs)(s.b,{accordionId:"3",children:[Object(d.jsx)("strong",{children:"This is the third item's accordion body."})," You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the"," ",Object(d.jsx)("code",{children:"<AccordionBody>"}),", though the transition does limit overflow."]})]})]})},O=function(){var e=Object(n.useState)("1"),o=Object(j.a)(e,2),c=o[0],a=o[1];return Object(d.jsxs)(s.a,{className:"accordion-without-arrow",open:c,toggle:function(e){c===e?a():a(e)},children:[Object(d.jsxs)(s.d,{children:[Object(d.jsx)(s.c,{targetId:"1",children:"Accordion Item 1"}),Object(d.jsx)(s.b,{accordionId:"1",children:"Lemon drops chocolate cake gummies carrot cake chupa chups muffin topping. Sesame snaps icing marzipan gummi bears macaroon drag\xe9e danish caramels powder. Bear claw drag\xe9e pastry topping souffl\xe9. Wafer gummi bears marshmallow pastry pie."})]}),Object(d.jsxs)(s.d,{children:[Object(d.jsx)(s.c,{targetId:"2",children:"Accordion Item 2"}),Object(d.jsx)(s.b,{accordionId:"2",children:"Dessert ice cream donut oat cake jelly-o pie sugar plum cheesecake. Bear claw drag\xe9e oat cake drag\xe9e ice cream halvah tootsie roll. Danish cake oat cake pie macaroon tart donut gummies. Jelly beans candy canes carrot cake. Fruitcake chocolate chupa chups."})]}),Object(d.jsxs)(s.d,{children:[Object(d.jsx)(s.c,{targetId:"3",children:"Accordion Item 3"}),Object(d.jsx)(s.b,{accordionId:"3",children:"Oat cake toffee chocolate bar jujubes. Marshmallow brownie lemon drops cheesecake. Bonbon gingerbread marshmallow sweet jelly beans muffin. Sweet roll bear claw candy canes oat cake drag\xe9e caramels. Ice cream wafer danish cookie caramels muffin."})]}),Object(d.jsxs)(s.d,{children:[Object(d.jsx)(s.c,{targetId:"4",children:"Accordion Item 4"}),Object(d.jsx)(s.b,{accordionId:"4",children:"Pastry pudding cookie toffee bonbon jujubes jujubes powder topping. Jelly beans gummi bears sweet roll bonbon muffin liquorice. Wafer lollipop sesame snaps. Brownie macaroon cookie claw candy canes muffin cupcake candy caramels tiramisu."})]})]})};o.default=function(){return Object(n.useEffect)((function(){r.a.highlightAll()}),[]),Object(d.jsxs)(n.Fragment,{children:[Object(d.jsx)(t.a,{title:"Accordions",data:[{title:"Components"},{title:"Accordions"}]}),Object(d.jsxs)(s.ib,{children:[Object(d.jsx)(s.B,{sm:"12",children:Object(d.jsxs)(i.a,{title:"Uncontrolled",code:l,children:[Object(d.jsx)(s.u,{children:"You may want to open one item at a time, for that you can use accordion."}),Object(d.jsx)(A,{})]})}),Object(d.jsx)(s.B,{sm:"12",children:Object(d.jsxs)(i.a,{title:"Controlled",code:l,children:[Object(d.jsx)(s.u,{children:"Manage a state to control your collapse component."}),Object(d.jsx)(y,{})]})}),Object(d.jsx)(s.B,{sm:"12",children:Object(d.jsxs)(i.a,{code:m,title:"Accordion Without Arrow",children:[Object(d.jsxs)(s.u,{children:["Use class ",Object(d.jsx)("code",{children:".accordion-without-arrow"})," class with ",Object(d.jsx)("code",{children:"<Accordion>"})," for accordion without arrow."]}),Object(d.jsx)(O,{})]})}),Object(d.jsx)(s.B,{sm:"12",children:Object(d.jsxs)(i.a,{title:"Border",code:u,children:[Object(d.jsxs)(s.u,{children:["Use class ",Object(d.jsx)("code",{children:".accordion-border"})," class with your accordion to create a bordered accordion."]}),Object(d.jsx)(h,{})]})}),Object(d.jsx)(s.B,{sm:"12",children:Object(d.jsxs)(i.a,{title:"Margin",code:b,children:[Object(d.jsxs)(s.u,{children:["Use class ",Object(d.jsx)("code",{children:".accordion-margin"})," class with your accordion to create a accordion with margin."]}),Object(d.jsx)(f,{})]})}),Object(d.jsx)(s.B,{sm:"12",children:Object(d.jsx)(i.a,{title:"Hover",code:p,children:Object(d.jsx)(g,{})})})]})]})}},701:function(e,o,c){"use strict";var n=c(8),a=c(0),r=c(24),i=c(7),t=c.n(i),s=c(300),d=c(260),l=c(321),m=c(316),u=c(257),b=c(13),p=c(2);o.a=function(e){var o=e.data,c=e.title;return Object(p.jsxs)("div",{className:"content-header row",children:[Object(p.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(p.jsx)("div",{className:"row breadcrumbs-top",children:Object(p.jsxs)("div",{className:"col-12",children:[c?Object(p.jsx)("h2",{className:"content-header-title float-start mb-0",children:c}):"",Object(p.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(p.jsxs)(b.g,{children:[Object(p.jsx)(b.h,{tag:"li",children:Object(p.jsx)(r.b,{to:"/",children:"Home"})}),o.map((function(e,c){var i=e.link?r.b:a.Fragment,s=o.length-1===c;return Object(p.jsx)(b.h,{tag:"li",active:!s,className:t()({"text-primary":!s}),children:Object(p.jsx)(i,Object(n.a)(Object(n.a)({},e.link?{to:e.link}:{}),{},{children:e.title}))},c)}))]})})]})})}),Object(p.jsx)("div",{className:"content-header-right text-md-end col-md-3 col-12 d-md-block d-none",children:Object(p.jsx)("div",{className:"breadcrumb-right dropdown",children:Object(p.jsxs)(b.tb,{children:[Object(p.jsx)(b.G,{color:"primary",className:"btn-icon btn-round dropdown-toggle",children:Object(p.jsx)(s.a,{size:14})}),Object(p.jsxs)(b.F,{tag:"ul",end:!0,children:[Object(p.jsxs)(b.E,{tag:r.b,to:"/apps/todo",children:[Object(p.jsx)(d.a,{className:"me-1",size:14}),Object(p.jsx)("span",{className:"align-middle",children:"Todo"})]}),Object(p.jsxs)(b.E,{tag:r.b,to:"/apps/chat",children:[Object(p.jsx)(l.a,{className:"me-1",size:14}),Object(p.jsx)("span",{className:"align-middle",children:"Chat"})]}),Object(p.jsxs)(b.E,{tag:r.b,to:"/apps/email",children:[Object(p.jsx)(m.a,{className:"me-1",size:14}),Object(p.jsx)("span",{className:"align-middle",children:"Email"})]}),Object(p.jsxs)(b.E,{tag:r.b,to:"/apps/calendar",children:[Object(p.jsx)(u.a,{className:"me-1",size:14}),Object(p.jsx)("span",{className:"align-middle",children:"Calendar"})]})]})]})})})]})}},706:function(e,o,c){"use strict";var n=c(9),a=c(0),r=c(272),i=c(13),t=c(2);o.a=function(e){var o=e.title,c=e.children,s=e.noBody,d=e.code,l=e.iconCode,m=Object(a.useState)(!1),u=Object(n.a)(m,2),b=u[0],p=u[1],j=l||Object(t.jsx)(r.a,{size:15}),g=s?a.Fragment:i.m;return Object(t.jsxs)(i.l,{className:"card-snippet",children:[Object(t.jsxs)(i.p,{children:[Object(t.jsx)(i.v,{tag:"h4",children:o}),Object(t.jsx)("div",{className:"views cursor-pointer",onClick:function(){return p(!b)},children:j})]}),Object(t.jsx)(g,{children:c}),Object(t.jsx)(i.C,{isOpen:b,children:Object(t.jsx)(i.m,{children:d})})]})}}}]);
//# sourceMappingURL=112.9cda2682.chunk.js.map