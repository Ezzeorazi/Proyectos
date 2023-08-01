// JavaScript para cambiar el idioma
function changeLanguage(language) {
    var translations = {
      'ALIMENTOS ENERGETICOS PARA EQUINOS DE ALTO RENDIMIENTO': {
        'es': 'ALIMENTOS ENERGETICOS PARA EQUINOS DE ALTO RENDIMIENTO',
        'en': 'ENERGETIC FOOD FOR HIGH PERFORMANCE EQUINES',
        'pt': 'ALIMENTOS ENERGÉTICOS PARA EQUINOS DE ALTO RENDIMENTO',
      },
      'Quienes Somos': {
        'es': 'Quienes Somos',
        'en': 'About us',
        'pt': 'Sobre nós',
      },
      'Beneficios': {
        'es': 'Beneficios',
        'en': 'Benefits',
        'pt': 'Benefícios',
      },
      'Información Nutricional': {
        'es': 'Información Nutricional',
        'en': 'Nutritional Information',
        'pt': 'Informações Nutricionais',
      },
      'Menu': {
        'es': 'Menu',
        'en': 'Menu',
        'pt': 'Menu',
      },
      'Inicio': {
        'es': 'Inicio',
        'en': 'Home',
        'pt': 'Início',
      },
      'Contacto': {
        'es': 'Contacto',
        'en': 'Contact',
        'pt': 'Contato',
      },
      // Agregar más traducciones aquí si es necesario
    };
  
    var elementsToTranslate = document.querySelectorAll('[data-translate]');
    elementsToTranslate.forEach(function (element) {
      var originalText = element.textContent;
      if (translations[originalText] && translations[originalText][language]) {
        element.textContent = translations[originalText][language];
      }
    });
  }
  