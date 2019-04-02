var depto_style = function (feature) {
      if(feature.properties.dpto_cnmbr === 'CUNDINAMARCA'){
        return {fillColor: 'red', fillOpacity: 0.5, color: 'red', weight: 2};
      } else if(feature.properties.dpto_cnmbr === 'TOLIMA'){
        return {fillColor: 'orange', fillOpacity: 0.5, color: 'orange', weight: 2};
      } else if(feature.properties.dpto_cnmbr === 'BOGOTA D.C.'){
        return {fillColor: 'blue', fillOpacity: 0.5, color: 'blue', weight: 2};
      } else if(feature.properties.dpto_cnmbr === 'META'){
        return {fillColor: 'green', fillOpacity: 0.5, color: 'green', weight: 2};
      } else if(feature.properties.dpto_cnmbr === 'HUILA'){
        return {fillColor: 'cyan', fillOpacity: 0.5, color: 'cyan', weight: 2};
      } else if(feature.properties.dpto_cnmbr === 'BOYACA'){
        return {fillColor: 'yellow', fillOpacity: 0.5, color: 'yellow', weight: 2};
      } else if(feature.properties.dpto_cnmbr === 'CASANARE'){
        return {fillColor: '#66ff66', fillOpacity: 0.5, color: '#66ff66', weight: 2};
      } else if(feature.properties.dpto_cnmbr === 'CALDAS'){
        return {fillColor: '#ff00ff', fillOpacity: 0.5, color: '#ff00ff', weight: 2};
      } else if(feature.properties.dpto_cnmbr === 'RISARALDA'){
        return {fillColor: '#33ccff', fillOpacity: 0.5, color: '#33ccff', weight: 2};
      } else if(feature.properties.dpto_cnmbr === 'QUINDIO'){
        return {fillColor: '#9933ff', fillOpacity: 0.5, color: '#9933ff', weight: 2};
      } else if(feature.properties.dpto_cnmbr === 'CHOCO'){
        return {fillColor: '#cc6600', fillOpacity: 0.5, color: '#cc6600', weight: 2};
      } else if(feature.properties.dpto_cnmbr === 'ANTIOQUIA'){
        return {fillColor: '#003300', fillOpacity: 0.5, color: '#003300', weight: 2};
      } else if(feature.properties.dpto_cnmbr === 'VALLE DEL CAUCA'){
        return {fillColor: '#009999', fillOpacity: 0.5, color: '#009999', weight: 2};
      } else if(feature.properties.dpto_cnmbr === 'CAUCA'){
        return {fillColor: '#999966', fillOpacity: 0.5, color: '#999966', weight: 2};
      } else if(feature.properties.dpto_cnmbr === 'NARIÑO'){
        return {fillColor: '#ffcc99', fillOpacity: 0.5, color: '#ffcc99', weight: 2};
      } else if(feature.properties.dpto_cnmbr === 'PUTUMAYO'){
        return {fillColor: '#ff99ff', fillOpacity: 0.5, color: '#ff99ff', weight: 2};
      } else if(feature.properties.dpto_cnmbr === 'CORDOBA'){
        return {fillColor: '#ff0066', fillOpacity: 0.5, color: '#ff0066', weight: 2};
      } else if(feature.properties.dpto_cnmbr === 'ATLANTICO'){
        return {fillColor: '#9999ff', fillOpacity: 0.5, color: '#9999ff', weight: 2};
      } else if(feature.properties.dpto_cnmbr === 'SUCRE'){
        return {fillColor: '#669999', fillOpacity: 0.5, color: '#669999', weight: 2};
      } else if(feature.properties.dpto_cnmbr === 'BOLIVAR'){
        return {fillColor: '#99ffcc', fillOpacity: 0.5, color: '#99ffcc', weight: 2};
      } else {
        return {fillColor: 'gray', fillOpacity: 0.5, color: 'gray', weight: 2};
      }
    };