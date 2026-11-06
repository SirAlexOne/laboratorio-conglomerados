import{u as V,z as M,D as N,G as A,w as E,r as I,Y as v,F as S,a9 as w,aa as F,T as k,j as e,Q as r,V as D,N as q}from"./index-3wKoSLnJ.js";import{L as G}from"./LabShell-8oLFctqW.js";import"./check-DC6Dx_ji.js";function J(){const{ledger:a,fingerprint:n,groups:t,centers:m,silhouetteValues:f,silhouetteMean:p,negativeSilhouettes:o,pcaResult:h,cultivarUnsealed:b,isReference:g}=V(),j=Array.from({length:Math.max(...t)},(i,s)=>t.filter(C=>C===s+1).length),d=M(N.map(i=>i.ari)),u=b?A(t,E.map(i=>i.cultivar)):null,c=a.scale==="standard"?"media y desviación estándar":a.scale==="raw"?"escala bruta":"mediana y MAD",l=a.algorithm==="kmeans"?"K-medias":a.algorithm==="hierarchy"?`jerarquía ${a.linkage}`:"PAM",x=I.useMemo(()=>`Se analizaron 178 muestras del conjunto Wine de UCI mediante ${a.activeVariables.length} mediciones químicas completas. Se excluyeron de la matriz activa el identificador y la etiqueta de cultivar. Las variables se prepararon con ${c}; en la escala bruta original la prolina aportaba cerca del 99.8 % de la suma de varianzas numéricas, por lo que la preparación tenía un efecto sustancial sobre la geometría.

Se utilizó ${l}, con disimilitud ${a.distance}, K = ${a.k}, semilla ${a.seed} y ${a.starts} inicios. La solución actual produjo tamaños ${j.join(", ")} y una silueta media de ${p.toFixed(3)}. La separación fue parcial y hubo ${o} muestras con silueta negativa. Ward, PAM y DIANA se consideran contrastes de método; una cofenética alta no justifica por sí sola un corte.

El plano ACP de presentación conservó ${h.planeVariance.toFixed(1)} % de la varianza estandarizada; el ajuste se realizó con ${a.activeVariables.length} variables. En la referencia de 100 submuestras del 80 %, reestimando escala y partición con K = 3, el ARI medio fue ${d.toFixed(3)}. ${u!==null?`El contraste posterior obtuvo ARI ${u.toFixed(3)} con cultivar, que no se había usado para ajustar.`:"La etiqueta cultivar permanece sellada y no intervino en este informe."} Los grupos se proponen como descripción exploratoria de la colección, sin inferir calidad comercial ni rendimiento predictivo futuro.`,[a,c,l,j.join(","),p,o,h.planeVariance,d,u]),$=`# Informe reproducible · Laboratorio de Conglomerados

**Huella de decisiones:** ${n}

${x}

## Bitácora

- Variables activas: ${a.activeVariables.join(", ")}
- Escala: ${c}
- Disimilitud: ${a.distance}
- Método/enlace: ${l}
- K: ${a.k}
- Semilla: ${a.seed}
- Número de inicios: ${a.starts}
- Exponente difuso: ${a.fuzzyM}
- Factor de unidad de prolina: ${a.prolineFactor}

## Límites

Los grupos describen esta colección; no se infieren a una población ni se “estatizan” en el tiempo. El ARI no es una tasa de acierto y las pertenencias difusas no son probabilidades de cultivar.
`,y=["id,grupo,silueta",...t.map((i,s)=>`${v[s]},${i},${f[s]}`)].join(`
`),z=[`grupo,${a.activeVariables.join(",")}`,...m.map((i,s)=>`G${s+1},${i.join(",")}`)].join(`
`),L=["id,G1,G2,G3",...S.map(i=>`${v[i.id-1]},${i.u.join(",")}`)].join(`
`),R=JSON.stringify({huella:n,bitacora:a,variables:k,medias_ajuste:F,desviaciones_ajuste:w,centroides:m,asignaciones:t,regla:"Estandarizar con medias y desviaciones de entrenamiento; asignar al centroide euclidiano más cercano.",origen:g?"Resultado de referencia (R)":"Recalculado en el navegador"},null,2);return e.jsxs(G,{id:12,children:[e.jsxs("section",{children:[e.jsxs("div",{className:"section-heading",children:[e.jsx("h2",{children:"Informe generado con la bitácora actual"}),e.jsx("span",{className:"fingerprint",children:n})]}),e.jsxs("article",{className:"report",children:[e.jsx("h2",{children:"Ejemplo de informe del caso"}),x.split(`

`).map((i,s)=>e.jsx("p",{children:i},s)),e.jsx("hr",{}),e.jsx("h3",{children:"Decisiones declaradas"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Variables activas: ",a.activeVariables.length," de 13."]}),e.jsxs("li",{children:["Escala: ",c,"."]}),e.jsxs("li",{children:["Disimilitud: ",a.distance,"."]}),e.jsxs("li",{children:["Método/enlace: ",l,"."]}),e.jsxs("li",{children:["K = ",a.k,"; semilla = ",a.seed,"; inicios = ",a.starts,"; m = ",a.fuzzyM.toFixed(1),"."]})]})]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Exportaciones locales"}),e.jsx("p",{children:"Cada archivo se genera en el navegador. Las asignaciones y centroides reflejan el estado actual; las pertenencias difusas conservan la referencia R de m = 2 y se identifican como tales."}),e.jsxs("div",{className:"button-row",children:[e.jsx(r,{filename:`informe-${n}.md`,content:$,type:"text/markdown;charset=utf-8",children:"Informe Markdown"}),e.jsx(r,{filename:`asignaciones-${n}.csv`,content:y,type:"text/csv;charset=utf-8",children:"Asignaciones CSV"}),e.jsx(r,{filename:`centroides-${n}.csv`,content:z,type:"text/csv;charset=utf-8",children:"Centroides CSV"}),e.jsx(r,{filename:"pertenencias-referencia-R.csv",content:L,type:"text/csv;charset=utf-8",children:"Pertenencias CSV"}),e.jsx(r,{filename:`regla-${n}.json`,content:R,type:"application/json",children:"Bitácora y regla JSON"})]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Lista de revisión antes de compartir"}),e.jsx("div",{className:"table-wrap",children:e.jsx("table",{className:"data-table",children:e.jsx("tbody",{children:[["Fuente y licencia","Wine UCI · CC BY 4.0 · DOI 10.24432/C5PC7J"],["Variables activas",`${a.activeVariables.length}; id y cultivar excluidos del ajuste`],["Fronteras",`${o} siluetas negativas; no eliminadas automáticamente`],["Estabilidad",`Referencia R: ARI medio ${d.toFixed(3)} en 100 submuestras`],["Trazabilidad",n],["Rango de descriptivos",`${D.length} variables auditadas; 0 ausencias`]].map(([i,s])=>e.jsxs("tr",{children:[e.jsx("th",{scope:"row",className:"text-left",children:i}),e.jsx("td",{className:"text-left",children:s})]},i))})})})]}),e.jsx(q,{type:"warning",title:"Alcance del informe",children:e.jsx("p",{children:"Los grupos describen esta colección; no se infieren a una población ni se “estatizan” en el tiempo. La estabilidad está condicionada al procedimiento y la coincidencia externa no es validación predictiva."})})]})}export{J as default};
