/**
* @package Code Craft
* @pdesc Conjunto de soluções front-end.
*
* @module String
* @file Extenção do objeto String.
*
* @author Rianna Cantarelli <rianna.aeon@gmail.com>
*/















/**
* Objeto String do javascript.
*
* @class String
*
* @static
*
* @global
*/




/**
* Insere uma string no indice indicado da string original.
*
* @function Insert
*
* @memberof String
*
* @param {Integer}                          ind                                     Indice onde o texto novo será adicionado.
* @param {String}                           neu                                     Texto que será adicionado.
*
* @return {String}
*/
String.prototype.Insert = function (ind, neu) {
    var sR = this;
    return (sR.slice(0, ind) + neu + sR.slice(ind + Math.abs(0)));
};

/**
* Remove uma cadeia de caracteres dentro dos limites indicados.
*
* @function Remove
*
* @memberof String
*
* @param {Integer}                          ini                                     Indice de onde começará o corte de caracteres.
* @param {Integer}                          len                                     Quantidade de caracteres que serão removidos.
*
* @return {String}
*/
String.prototype.Remove = function (ini, len) {
    var s = this;
	var sR = '';
	var mI = ini + len - 1;

	for (var i = 0; i < s.length; i++) {
		if (i < ini || i > mI) { sR += s.charAt(i); }
	}

	return sR;
};

/**
* Remove espaços em branco no inicio e no final da string.
*
* @function Trim
*
* @memberof String
*
* @return {String}
*/
String.prototype.Trim = function () {
    return this.replace(/^\s+|\s+$/g,'');
};

/**
* Remove da string todas as ocorrências da cadeia de caracteres informado.
*
* @function RemoveChars
*
* @memberof String
*
* @param {String}                           rem                                     Caracteres que deverão ser excluidos (1 a 1) do texto original.
*
* @return {String}
*/
String.prototype.RemoveChars = function (rem) {
	var sR = this;

	for (var i = 0; i < rem.length; i++) {
		sR = sR.ReplaceAll(rem.charAt(i), '');
	}

	return sR;
};

/**
* Mantem apenas os caracteres que pertencem a string de válidos.
*
* @function OnlyCharCollection
*
* @memberof String
*
* @param {String}                           valid                                   Caracteres que são permitidos (caseSensitive).
*
* @return {String}
*/
String.prototype.OnlyCharCollection = function(valid) {
    var s = this;
	var sR = '';
	
	for(var i=0; i<s.length; i++) {
		var c = s.charAt(i);

		for(var j=0; j<valid.length; j++) {
			if(c == valid.charAt(j)) { sR += c; j=valid.length; }
		}
	}
	
	return sR;
};

/**
* Substitui toda ocorrência de determinada string por uma outra definida.
*
* @function ReplaceAll
*
* @memberof String
*
* @param {String}                           old                                     String que será alterada.
* @param {String}                           neu                                     String que será adicionada no lugar de "sold".
*
* @return {String}
*/
String.prototype.ReplaceAll = function (old, neu) {
	var sR = this;
    while(sR.indexOf(old) != -1) { sR = sR.replace(old, neu); }
	return sR;
};

/**
* Limita a sentença à um número máximo de palavras.
*
* @function MaxWordsExpression
*
* @memberof String
*
* @param {Integer}                          max                                     Número máximo de palavras.
*
* @return {String}
*/
String.prototype.MaxWordsExpression = function (max) {
    var sR = '';
    var words = this.split(' ');
    max = (words.Length < max) ? words.Length : max;

    for (var i = 0; i < max; i++) { sR += words[i] + ' '; }
    
    return sR.substring(0, sR.length - 1);
};

/**
* Limita uma sentença à um número máximo de caracteres.
*
* @function MaxCharExpression
*
* @memberof String
*
* @param {Integer}                          max                                     Número máximo de caracteres.
* @param {String}                           [end = '']                              Se definido algum valor, este será adicionado ao final do texto.
*
* @return {String}
*/
String.prototype.MaxCharExpression = function (max, end) {
    var s = this;
    end = (end === undefined) ? '' : end;
    return (s.length >= max) ? s.substring(0, (max - end.length)) + end : s;
};

/**
* Transforma todos caracteres com glifos para seu equivalente sem glifo.
* Caracteres que não forem letras ou não ocidentais serão convertidos em _ com excessão de "." e " "
*
* @function ReplaceGlyphs
*
* @memberof String
*
* @return {String}
*/
String.prototype.ReplaceGlyphs = function () {
	var s = this;
	
	var rem = 'ÄÅÁÂÀÃäáâàãÉÊËÈéêëèÍÎÏÌíîïìÖÓÔÒÕöóôòõÜÚÛüúûùÇç';
	var sub = 'AAAAAAaaaaaEEEEeeeeIIIIiiiiOOOOOoooooUUUuuuuCc';
	for(var i=0; i<rem.length; i++) { s = s.ReplaceAll(rem[i], sub[i]); }
	
	var sT = s;
	s = '';

	for(var i=0; i<sT.length; i++) 
	{
		var cod = sT.charCodeAt(i);
		var c = sT.charAt(i);

		// Se o caracter for válido, adiciona-o.
        // 48-57    : Range dos números
        // 64-90    : Range dos Caracteres Maiusculos
        // 97-122   : Range dos Caracteres Minusculos
		if ((cod >= 48 && cod <= 57) || (cod >= 65 && cod <= 90) || (cod >= 97 && cod <= 122) ||
        (c == '.' || c == ' ')) { 
            s += c; 
        }
		else { s += '_'; }
	}

	return s;
};

/**
* Substitui qualquer caracter reservado XML para seu equivalente em entitie X/HTML.
*
* @function ConvertStringToXMLValue
*
* @memberof String
*
* @return {String}
*/
String.prototype.ConvertStringToXMLValue = function () {
    var sR = this;

    sR = sR.ReplaceAll('&amp;', '§');
    sR = sR.ReplaceAll('&', '§');
    sR = sR.ReplaceAll('§', '&amp;');
    sR = sR.ReplaceAll('<', '&lt;');
    sR = sR.ReplaceAll('>', '&gt;');
    sR = sR.ReplaceAll("'", '&apos;');
    sR = sR.ReplaceAll('"', '&quot;');

    return sR;
};

/**
* Substitui entities X/HTML para seus caracteres equivalentes.
*
* @function ConvertXMLValueToString
*
* @memberof String
*
* @return {String}
*/
String.prototype.ConvertXMLValueToString = function () {
	var sR = this;
	
	sR = sR.ReplaceAll('&amp;', '&');
	sR = sR.ReplaceAll('&lt;', '<');
	sR = sR.ReplaceAll('&gt;', '>');
	sR = sR.ReplaceAll('&apos;', "'");
	sR = sR.ReplaceAll('&quot;', '"');

	return sR;
};

/**
* Transforma a primeira letra da sentança em seu formato em maiuscula.
*
* @function UpperCaseFirst
*
* @memberof String
*
* @param {Boolean}                          [each = false]                          Quando "true" converte a primeira letra de cada palavra em maiuscula.
*
* @return {String}
*/
String.prototype.UpperCaseFirst = function (each) {
	var s = this;
    var sR = '';
    each = (each === undefined) ? false : each;

	if(each) {
		var words = s.split(' ');
		
		for(var i=0; i<words.length; i++) {
			sR += words[i].charAt(0).toUpperCase() + words[i].substring(1, words[i].length) + ' ';
		}
		sR = sR.substring(0, sR.length - 1);
	}
	else {
		sR += s.charAt(0).toUpperCase() + s.substring(1, s.length);
	}

	return sR;
};




















/**
* Objeto de definição de configurações para senhas.
*
* @typedef PasswordConfig
*
* @global
*
* @property {String}                        CommomChars                             Coleção básica de caracteres para construção de uma senha.
* @property {String}                        SpecialChars                            Coleção de caracteres especiais que podem ser usados na senha.
* @property {Integer}                       MinLength                               Menor tamanho de senha possível.
* @property {Integer}                       MaxLength                               Maior tamanho de senha possível.
* @property {Function}                      Check                                   Função validadora.
*/



/**
* Objeto de definição para regras de validação de datas.
*
* @typedef DataDefinition
*
* @global
*
* @property {?String}                       Mask                                    Mascara do formato que se quer representar.
* @property {RegExp}                        RegExp                                  Objeto "RegExp" responsável por validar o formato indicado.
* @property {?Integer}                      MinLength = null                        Número mínimo de caracteres aceitos para descrever o formato.
* @property {?Integer}                      MaxLength = null                        Número máximo de caracteres aceitos para descrever o formato.
* @property {Function}                      Check                                   Função validadora do tipo de dado.
* @property {Function}                      Format                                  Função formatadora do tipo.
*/



/**
* Objeto de definição para pontuação de valores numerais.
*
* @typedef NumberDefinition
*
* @global
*
* @property {String}                        Decimal                                 Caracter que identifica o divisor decimal.
* @property {String}                        Thousand                                Caracter que identifica o pontuador de milhar.
*/



/**
* Verifica se a string corresponde à expressão regular definida.
*
* @function IsPatternMatch
*
* @memberof String
*
* @param {RegExp}                           r                                       RegExp que será usada para validar a string.
*
* @return {Boolean}
*/
String.prototype.IsPatternMatch = function(r) {
	var re = new RegExp(r);
	return re.test(this);
};










/** 
* Classe estática que compreende os diferentes padrões de formatos e suas regras de validações.
*
* @class Pattern
*
* @memberof String
*
* @static
*
* @type {Class}
*
* @property {Function}                      CheckDateTime                       Valida uma string de data conforme sua definição formatação.
* @property {Function}                      FormatDateTime                      Converte a string em um objeto Date mediante a especificação do formato.
* @property {Object}                        World                               Formatos reconhecidos internacionalmente.
*/
String.Pattern = {
    /**
    * Valida uma string de data conforme sua definição formatação.
    *
    * @function CheckDateTime
    *
    * @memberof Pattern
    *
    * @param {String}                       v                                       Valor.
    * @param {DataDefinition}               dd                                      Objeto de definição de formato.
    *
    * @return {Boolean}
    */
    CheckDateTime: function (v, dd) {
        return (v.IsPatternMatch(dd.RegExp) && v.ToDate(dd.Mask) != null) ? true : false;
    },
    /**
    * Converte a string em um objeto Date mediante a especificação do formato.
    *
    * @function FormatDateTime
    *
    * @memberof Pattern
    *
    * @param {String}                       v                                       Valor.
    * @param {String}                       mk                                      Máscara da data.
    *
    * @return {?Date}
    */
    FormatDateTime: function (v, mk) {
        var sO = v;
        var oR = null;

        var Clean = function (f) {
            f = f.replace('t', ' ').replace('T', ' ');
            return f.RemoveChars('-/.:wWzZ');
        };

        sO = Clean(sO);
        mk = Clean(mk);


        if (sO.length == mk.length) {
            var y = '';
            var M = '';
            var d = '';
            var H = '';
            var m = '';
            var s = '';

            for (var i = 0; i < mk.length; i++) {
                var num = sO.charAt(i);
                var part = mk.charAt(i);

                switch (part) {
                    case 'y': y += num; break;
                    case 'M': M += num; break;
                    case 'd': d += num; break;
                    case 'H': H += num; break;
                    case 'm': m += num; break;
                    case 's': s += num; break;
                }
            }

            var out = false;

            // Testa limites para ano
            (y == '') ? y = '0001' : ((y < 1 || y > 9999) ? out = true : '');

            // Testa limites para mês
            (M == '') ? M = '01' : ((M < 1 || M > 12) ? out = true : '');

            // Testa limites para dia
            (d == '') ? d = '01' : ((d < 1 || d > 31) ? out = true : '');

            // Testa limites para hora
            (H == '') ? H = '00' : ((H < 0 || H > 23) ? out = true : '');

            // Testa limites para minuto
            (m == '') ? m = '00' : ((m < 0 || m > 59) ? out = true : '');

            // Testa limites para segundo
            (s == '') ? s = '00' : ((s < 0 || s > 59) ? out = true : '');

            if (!out) {
                oR = Date.parse(y + '-' + M + '-' + d + 'T' + H + ':' + m + ':' + s);
                oR = (isNaN(oR)) ? null : new Date(oR);
            }
        }

        return oR;
    },
    /**
    * Padroniza o formato da string de data. 
    * Se não for uma data válida retorna o valor inicial
    *
    * @function StandardizeDate
    *
    * @private
    *
    * @memberof Pattern
    *
    * @param {String}                       v                                       Valor.
    * @param {String}                       mk                                      Máscara da data.
    *
    * @return {String}
    */
    StandardizeDate: function (v, mk) {
        var d = String.Pattern.FormatDateTime(v, mk);
        v = d.ToString(mk);
        return v;
    },
    /**
    * Padroniza o formato da string de data em padrão Week. 
    *
    * @function StandardizeWeekDate
    *
    * @private
    *
    * @memberof Pattern
    *
    * @param {String}                       v                                       Valor.
    * @param {String}                       [f = "week"]                            Formato a ser usado para a data (week|weekbr).
    *
    * @return {String}
    */
    StandardizeWeekDate: function (v, f) {
        if (typeof (WeekDate) !== 'undefined') {
            if (WeekDate.IsWeek(v)) {
                var d = WeekDate.DateOfWeek(v);
                v = d.ToWeekFormat(true, f);
            }
        }
        return v;
    },











    /**
    * Formatos reconhecidos internacionalmente.
    *
    * @class Pattern.World
    *
    * @memberof Pattern
    *
    * @static
    *
    * @type {Class}
    *
    * @property {DataDefinition}                Number                              Definição do formato "Number".
    * @property {DataDefinition}                Email                               Definição do formato "Email"
    * @property {DataDefinition}                URL                                 Definição do formato "URL"
    * @property {DataDefinition}                Color                               Definição do formato "Color"
    * @property {DataDefinition}                Locale                              Definição do formato "Locale"
    * @property {PasswordConfig}                Password                            Configurações padrões para definições de senhas. 
    * @property {Object}                        Dates                               Formatos de data conforme ISO 8601 .
    * @property {DataDefinition}                Dates.DateTimeGlobalZone            Definição do formato "DateTimeGlobalZone".
    * @property {DataDefinition}                Dates.DateTimeLocal                 Definição do formato "DateTimeLocal".
    * @property {DataDefinition}                Dates.DateTime                      Definição do formato "DateTime".
    * @property {DataDefinition}                Dates.Date                          Definição do formato "Date".
    * @property {DataDefinition}                Dates.Month                         Definição do formato "Month".
    * @property {DataDefinition}                Dates.Week                          Definição do formato "Week".
    * @property {DataDefinition}                Dates.Time                          Definição do formato "Time".
    */
    World: {
        /** 
        * Definição do formato "Number".
        *
        * @memberof Pattern.World
        * @static
        *
        * @type {DataDefinition}
        */
        Number: {
            /** 
            * Máscara do tipo. 
            *
            * @memberof String.Pattern.World.Number
            * @static
            *
            * @type {?String}
            */
            Mask: null,
            /** 
            * Expressão regular para validação.
            * Use para validar números devidamente formatados.
            *
            * @memberof String.Pattern.World.Number
            * @static
            *
            * @type {RegExp}
            */
            RegExp: /(^([+]|[-])?\d{1,3}(?:\.?\d{3})*(?:,\d{1,9})?$)|(^([+]|[-])?\d{1,3}(?:,?\d{3})*(?:\.\d{1,9})?$)|(^([+]|[-])?\d+(([,]?[0-9]+)|([.]?[0-9]+))?$)/,
            /** 
            * Valor mínimo em caracteres para expressar o formato.
            *
            * @memberof String.Pattern.World.Number
            * @static
            *
            * @type {Integer}
            */
            MinLength: 1,
            /** 
            * Valor máximo em caracteres para expressar o formato.
            *
            * @memberof String.Pattern.World.Number
            * @static
            *
            * @type {Integer}
            */
            MaxLength: 31,
            /** 
            * Verifica valor.
            *
            * @memberof String.Pattern.World.Number
            * @static
            *
            * @param {String}               v                                       Valor.
            *
            * @type {Boolean}
            */
            Check: function (v) {
                return v.toString().IsPatternMatch(this.RegExp);
            },
            /** 
            * Formata valor.
            *
            * @memberof String.Pattern.World.Number
            * @static
            *
            * @param {String}               v                                       Valor.
            * @param {NumberDefinition}     [nD]                                    Definições dos separadores numéricos conforme cultura.
            * @param {Integer}              [nDec = 0]                              Quantidade de digitos após o divisor decimal.
            *
            * @type {String}
            */
            Format: function (v, nD, nDec) {
                v = v.toString();
                nD = (nD === undefined) ? { Decimal: '.', Thousand: ','} : nD;
                nDec = (nDec === undefined) ? 0 : nDec;

                dec = nD.Decimal;
                tho = nD.Thousand;

                // Padroniza o número para um formato "natural"
                v = v.ReplaceAll(tho, '').replace(',', '.');


                if (!isNaN(v)) {

                    var iDec = v.indexOf('.');
                    var left = 0;

                    var iPart = '';
                    var dPart = '';

                    if (iDec == -1) { iPart = v; left = nDec; }
                    else {
                        iPart = v.split('.')[0];
                        dPart = v.split('.')[1];
                        left = nDec - dPart.length;
                    }

                    var iC = 0;
                    var nI = iPart;
                    iPart = '';
                    for (var i = nI.length - 1; i >= 0; i--) {
                        var d = nI.charAt(i);

                        if (iC == 3) { iPart = tho + iPart; iC = 0; }

                        iPart = d + iPart;
                        iC++;
                    }

                    if (left > 0) {
                        while (left > 0) { dPart += '0'; left--; }
                    }
                    else { dPart = dPart.substring(0, nDec); }

                    return (nDec > 0) ? iPart + dec + dPart : iPart;
                }

                return v;
            }
        },
        /**
        * Definição do formato "Email"
        *
        * @memberof Pattern.World
        * @static
        *
        * @type {DataDefinition}
        */
        Email: {
            /** 
            * Máscara do tipo. 
            *
            * @memberof String.Pattern.World.Email
            * @static
            *
            * @type {?String}
            */
            Mask: null,
            /** 
            * Expressão regular para validação. 
            *
            * @memberof String.Pattern.World.Email
            * @static
            *
            * @type {RegExp}
            */
            RegExp: /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,6})+$/,
            /** 
            * Valor mínimo em caracteres para expressar o formato.
            *
            * @memberof String.Pattern.World.Number
            * @static
            *
            * @type {Integer}
            */
            MinLength: 6,
            /** 
            * Valor máximo em caracteres para expressar o formato.
            *
            * @memberof String.Pattern.World.Number
            * @static
            * 
            * @type {Integer}
            */
            MaxLength: 64,
            /** 
            * Verifica valor.
            *
            * @memberof String.Pattern.World.Email
            * @static
            *
            * @param {String}               v                                       Valor.
            *
            * @type {Boolean}
            */
            Check: function (v) {
                return v.IsPatternMatch(this.RegExp);
            },
            /** 
            * Formata valor.
            *
            * @memberof String.Pattern.World.Email
            * @static
            *
            * @param {String}               v                                       Valor.
            *
            * @type {String}
            */
            Format: function (v) {
                return v.toLowerCase();
            }
        },
        /**
        * Definição do formato "URL"
        *
        * @memberof Pattern.World
        * @static
        *
        * @type {DataDefinition}
        */
        URL: {
            /** 
            * Máscara do tipo. 
            *
            * @memberof String.Pattern.World.URL
            * @static
            *
            * @type {?String}
            */
            Mask: null,
            /** 
            * Expressão regular para validação. 
            *
            * @memberof String.Pattern.World.URL
            * @static
            *
            * @type {RegExp}
            */
            RegExp: /^(((http)|(https)|(ftp)|(ftps))(:\/\/))?([\w]{1,256})([.]{1,1})([\w#!:.?+=&%@\-\/]{1,1783})$/,
            /** 
            * Valor mínimo em caracteres para expressar o formato.
            *
            * @memberof String.Pattern.World.Number
            * @static
            *
            * @type {Integer}
            */
            MinLength: 11,
            /** 
            * Valor máximo em caracteres para expressar o formato.
            *
            * @memberof String.Pattern.World.Number
            * @static
            * 
            * @type {Integer}
            */
            MaxLength: 2024,
            /** 
            * Verifica valor.
            *
            * @memberof String.Pattern.World.URL
            * @static
            *
            * @param {String}               v                                       Valor.
            *
            * @type {Boolean}
            */
            Check: function (v) {
                // Garante que a falta do protocolo não invalidará a validação
                return (v.IsPatternMatch(this.RegExp)) ? true : ('http://' + v).IsPatternMatch(this.RegExp);
            },
            /** 
            * Formata valor.
            *
            * @memberof String.Pattern.World.URL
            * @static
            *
            * @param {String}               v                                       Valor.
            *
            * @type {String}
            */
            Format: function (v) {
                if (v != '' && (v.length < 6 || (v.indexOf('http://') == -1 && v.indexOf('https://') == -1 && v.indexOf('ftp://') == -1 && v.indexOf('ftps://') == -1))) {
                    return 'http://' + v;
                }
                return v;
            }
        },
        /**
        * Definição do formato "Color"
        *
        * @memberof Pattern.World
        * @static
        *
        * @type {DataDefinition}
        */
        Color: {
            /** 
            * Máscara do tipo. 
            *
            * @memberof String.Pattern.World.Color
            * @static
            *
            * @type {?String}
            */
            Mask: null,
            /** 
            * Expressão regular para validação. 
            *
            * @memberof String.Pattern.World.Color
            * @static
            *
            * @type {RegExp}
            */
            RegExp: /^([#][0-9A-Fa-f]{6})$/,
            /** 
            * Valor mínimo em caracteres para expressar o formato.
            *
            * @memberof String.Pattern.World.Number
            * @static
            *
            * @type {Integer}
            */
            MinLength: 7,
            /** 
            * Valor máximo em caracteres para expressar o formato.
            *
            * @memberof String.Pattern.World.Number
            * @static
            * 
            * @type {Integer}
            */
            MaxLength: 7,
            /** 
            * Verifica valor.
            *
            * @memberof String.Pattern.World.Color
            * @static
            *
            * @param {String}               v                                       Valor.
            *
            * @type {Boolean}
            */
            Check: function (v) {
                return v.IsPatternMatch(this.RegExp);
            },
            /** 
            * Formata valor.
            *
            * @memberof String.Pattern.World.Color
            * @static
            *
            * @param {String}               v                                       Valor.
            *
            * @type {String}
            */
            Format: function (v) {
                return v.toUpperCase();
            }
        },
        /**
        * Definição do formato "Locale"
        *
        * @memberof Pattern.World
        * @static
        *
        * @type {DataDefinition}
        */
        Locale: {
            /** 
            * Máscara do tipo. 
            *
            * @memberof String.Pattern.World.Locale
            * @static
            *
            * @type {?String}
            */
            Mask: null,
            /** 
            * Expressão regular para validação. 
            *
            * @memberof String.Pattern.World.Locale
            * @static
            *
            * @type {RegExp}
            */
            RegExp: /^([a-zA-Z]{4})|([a-z]{2}[-][a-zA-Z]{2})$/,
            /** 
            * Valor mínimo em caracteres para expressar o formato.
            *
            * @memberof String.Pattern.World.Number
            * @static
            *
            * @type {Integer}
            */
            MinLength: 5,
            /** 
            * Valor máximo em caracteres para expressar o formato.
            *
            * @memberof String.Pattern.World.Number
            * @static
            * 
            * @type {Integer}
            */
            MaxLength: 5,
            /** 
            * Verifica valor.
            *
            * @memberof String.Pattern.World.Locale
            * @static
            *
            * @param {String}               v                                       Valor.
            *
            * @type {Boolean}
            */
            Check: function (v) {
                return v.IsPatternMatch(this.RegExp);
            },
            /** 
            * Formata valor.
            *
            * @memberof String.Pattern.World.Locale
            * @static
            *
            * @param {String}               v                                       Valor.
            *
            * @type {String}
            */
            Format: function (v) {
                v = v.toLowerCase().OnlyCharCollection('abcdefghijklmnopqrstuvywxz');
                if (v.length == 4) {
                    return v.substring(0, 2) + '-' + v.substring(2, 4).toUpperCase();
                }
                return v;
            }
        },
        /**
        * Configurações padrões para definições de senhas.
        *
        * @memberof Pattern.World
        * @static
        *
        * @type {PasswordConfig}
        */
        Password: {
            /**
            * Caracteres comuns.
            * 
            * @memberof String.Pattern.World.Password
            * @static
            *
            * @type {String}
            */
            CommomChars: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
            /**
            * Caracteres especiais que podem ser usados.
            * 
            * @memberof String.Pattern.World.Password
            * @static
            *
            * @type {String}
            */
            SpecialChars: '!@#$%¨*()-_+=?',
            /**
            * Número mínimo de caracteres que uma senha deve ter.
            * 
            * @memberof String.Pattern.World.Password
            * @static
            *
            * @type {Integer}
            */
            MinLength: 8,
            /**
            * Número máximo de caracteres que uma senha pode ter.
            * 
            * @memberof String.Pattern.World.Password
            * @static
            *
            * @type {Integer}
            */
            MaxLength: 20,
            /**
            * Verifica se a String é uma senha válida conforme configurações padrões.
            *
            * @function IsPassword
            *
            * @param {String}               v                                       Valor.
            * @param {Boolean}              [r = false]                             Quando "true" retorna os caracteres inválidos encontrados.
            *
            * @return {Boolean}
            */
            Check: function (v, r) {
                r = (r === undefined) ? false : r;

                var pP = this.CommomChars + this.SpecialChars;

                var invC = '';
                var b = false;

                for (var i = 0; i < v.length; i++) {
                    var c = v.charAt(i);
                    if (pP.indexOf(c) == -1) { invC += c; }
                }

                if (invC === '') {
                    if (v.length >= this.MinLength && v.length <= this.MaxLength) { b = true; }
                }

                return (r) ? invC : b;
            },
            /**
            * Testa a força da string enquanto senha e retorna sua pontuação.
            *
            * @function PasswordStrength
            *
            * @param {String}               v                                       Valor.
            *
            * @return {Integer}
            *
            * @example Pontuação :
            * 10 pontos:  Por cada caracter diferente onde "T != t"
            * 05 pontos:  Se houver ao menos 3 numerais diferentes.
            * 05 pontos:  Se houver ao menos 2 simbolos diferentes : !@#$+-_=[]{}?
            *
            * +10 pontos:  Por cada familia de caracteres alem da primeira
            * Minusculas | Maiusculas | Numeros | Simbolos
            */
            Strength: function (v) {
                var iR = 0;

                // Resgata coleção de caracteres únicos da senha
                var uCh = v.charAt(0);
                for (var i = 1; i < v.length; i++) {
                    var cI = v.charAt(i);
                    if (uCh.indexOf(cI) == -1) { uCh += cI; }
                }

                // Pontua pela quantidade de caracteres únicos
                iR += (uCh.length * 10);

                // Verifica familia de caracters usados na senha
                // Pontua por cada conjunto de familia de caracteres alem do 1º
                if (uCh.match(/([a-z])/)) { iR += 10; }
                if (uCh.match(/([A-Z])/)) { iR += 10; }
                if (uCh.match(/([0-9])/)) { iR += 10; }

                // Verifica existência de caracteres especiais
                var sCh = 0;
                for (var i = 0; i < this.SpecialChars.length; i++) {
                    var c = this.SpecialChars.charAt(i);
                    if (uCh.indexOf(c) != -1) { sCh++; if (sCh == 1) { iR += 10; } }
                }
                iR -= 10;

                // Pontua se houver ao menos 3 numerais
                if (uCh.match(/(.*[0-9].*[0-9].*[0-9])/)) { iR += 5; }

                // Pontua se houver ao menos 2 simbolos
                if (sCh >= 2) { iR += 5; }

                return iR;
            },
            /**
            * Gera uma senha de forma aleatória baseada nas configurações passadas.
            * O tamanho da senha será o valor informado em cfg.MinLength
            *
            * @function Generate
            *
            * @param {PasswordConfig}       [cfg]                                   Configurações da senha que será gerada. Usará os valores padrões caso não seja informado.
            *
            * @return {String}
            */
            Generate: function (cfg) {
                cfg = (cfg === undefined) ? String.Pattern.World.Password : cfg;

                var pw = '';
                var validChars = cfg.CommomChars + cfg.SpecialChars;

                for (var i = 0; i < cfg.MinLength; i++) {
                    var cI = Math.floor(Math.random() * validChars.length) + 1;
                    pw += validChars.charAt(cI);
                }

                return pw;
            }
        },
        /**
        * Formatos de data conforme ISO 8601 .
        *
        * @memberof Pattern.World
        * @static
        *
        * @type {Object}
        */
        Dates: {
            /**
            * Definição do formato "DateTimeGlobalZone".
            *
            * @memberof String.Pattern.World.Dates
            * @static
            *
            * @type {DataDefinition}
            */
            DateTimeGlobalZone: {
                /** 
                * Máscara do tipo. 
                *
                * @memberof String.Pattern.World.Dates.DateTimeGlobalZone
                * @static
                *
                * @type {?String}
                */
                Mask: 'yyyy-MM-ddTHH:mm:ssZ',
                /** 
                * Expressão regular para validação. 
                *
                * @memberof String.Pattern.World.Dates.DateTimeGlobalZone
                * @static
                *
                * @type {RegExp}
                */
                RegExp: /^(\d{4})[\/\-.]([0]?[1-9]|[1][012])[\/\-.]([0]?[1-9]|[12][0-9]|[3][01])[T]([01]?\d|2[0-3]):([0-5]?\d):([0-5]?\d)[Z]$/,
                /** 
                * Valor mínimo em caracteres para expressar o formato.
                *
                * @memberof String.Pattern.World.Number
                * @static
                *
                * @type {Integer}
                */
                MinLength: 20,
                /** 
                * Valor máximo em caracteres para expressar o formato.
                *
                * @memberof String.Pattern.World.Number
                * @static
                * 
                * @type {Integer}
                */
                MaxLength: 20,
                /** 
                * Verifica valor.
                *
                * @memberof String.Pattern.World.Dates.DateTimeGlobalZone
                * @static
                *
                * @param {String}           v                                       Valor.
                *
                * @type {Boolean}
                */
                Check: function (v) {
                    return String.Pattern.CheckDateTime(v, this);
                },
                /** 
                * Formata valor.
                *
                * @memberof String.Pattern.World.Dates.DateTimeGlobalZone
                * @static
                *
                * @param {String}           v                                       Valor.
                *
                * @type {String}
                */
                Format: function (v) {
                    return String.Pattern.StandardizeDate(v, this.Mask);
                }
            },
            /**
            * Definição do formato "DateTimeLocal".
            *
            * @memberof String.Pattern.World.Dates
            * @static
            *
            * @type {DataDefinition}
            */
            DateTimeLocal: {
                /** 
                * Máscara do tipo. 
                *
                * @memberof String.Pattern.World.Dates.DateTimeLocal
                * @static
                *
                * @type {?String}
                */
                Mask: 'yyyy-MM-ddTHH:mm:ss',
                /** 
                * Expressão regular para validação. 
                *
                * @memberof String.Pattern.World.Dates.DateTimeLocal
                * @static
                *
                * @type {RegExp}
                */
                RegExp: /^(\d{4})[\/\-.]([0]?[1-9]|[1][012])[\/\-.]([0]?[1-9]|[12][0-9]|[3][01])[T]([01]?\d|2[0-3]):([0-5]?\d):([0-5]?\d)$/,
                /** 
                * Valor mínimo em caracteres para expressar o formato.
                *
                * @memberof String.Pattern.World.Number
                * @static
                *
                * @type {Integer}
                */
                MinLength: 19,
                /** 
                * Valor máximo em caracteres para expressar o formato.
                *
                * @memberof String.Pattern.World.Number
                * @static
                * 
                * @type {Integer}
                */
                MaxLength: 19,
                /** 
                * Verifica valor.
                *
                * @memberof String.Pattern.World.Dates.DateTimeLocal
                * @static
                *
                * @param {String}           v                                       Valor.
                *
                * @type {Boolean}
                */
                Check: function (v) {
                    return String.Pattern.CheckDateTime(v, this);
                },
                /** 
                * Formata valor.
                *
                * @memberof String.Pattern.World.Dates.DateTimeLocal
                * @static
                *
                * @param {String}           v                                       Valor.
                *
                * @type {String}
                */
                Format: function (v) {
                    return String.Pattern.StandardizeDate(v, this.Mask);
                }
            },
            /**
            * Definição do formato "DateTime".
            *
            * @memberof String.Pattern.World.Dates
            * @static
            *
            * @type {DataDefinition}
            */
            DateTime: {
                /** 
                * Máscara do tipo. 
                *
                * @memberof String.Pattern.World.Dates.DateTime
                * @static
                *
                * @type {?String}
                */
                Mask: 'yyyy-MM-dd HH:mm:ss',
                /** 
                * Expressão regular para validação. 
                *
                * @memberof String.Pattern.World.Dates.DateTime
                * @static
                *
                * @type {RegExp}
                */
                RegExp: /^(\d{4})[\/\-.]([0]?[1-9]|[1][012])[\/\-.]([0]?[1-9]|[12][0-9]|[3][01])[ ]([01]?\d|2[0-3]):([0-5]?\d):([0-5]?\d)$/,
                /** 
                * Valor mínimo em caracteres para expressar o formato.
                *
                * @memberof String.Pattern.World.Number
                * @static
                *
                * @type {Integer}
                */
                MinLength: 19,
                /** 
                * Valor máximo em caracteres para expressar o formato.
                *
                * @memberof String.Pattern.World.Number
                * @static
                * 
                * @type {Integer}
                */
                MaxLength: 19,
                /** 
                * Verifica valor.
                *
                * @memberof String.Pattern.World.Dates.DateTime
                * @static
                *
                * @param {String}           v                                       Valor.
                *
                * @type {Boolean}
                */
                Check: function (v) {
                    return String.Pattern.CheckDateTime(v, this);
                },
                /** 
                * Formata valor.
                *
                * @memberof String.Pattern.World.Dates.DateTime
                * @static
                *
                * @param {String}           v                                       Valor.
                *
                * @type {String}
                */
                Format: function (v) {
                    return String.Pattern.StandardizeDate(v, this.Mask);
                }
            },
            /**
            * Definição do formato "Date".
            *
            * @memberof String.Pattern.World.Dates
            * @static
            *
            * @type {DataDefinition}
            */
            Date: {
                /** 
                * Máscara do tipo. 
                *
                * @memberof String.Pattern.World.Dates.Date
                * @static
                *
                * @type {?String}
                */
                Mask: 'yyyy-MM-dd',
                /** 
                * Expressão regular para validação. 
                *
                * @memberof String.Pattern.World.Dates.Date
                * @static
                *
                * @type {RegExp}
                */
                RegExp: /^(\d{4})[\/\-.]([0]?[1-9]|[1][012])[\/\-.]([0]?[1-9]|[12][0-9]|[3][01])$/,
                /** 
                * Valor mínimo em caracteres para expressar o formato.
                *
                * @memberof String.Pattern.World.Number
                * @static
                *
                * @type {Integer}
                */
                MinLength: 10,
                /** 
                * Valor máximo em caracteres para expressar o formato.
                *
                * @memberof String.Pattern.World.Number
                * @static
                * 
                * @type {Integer}
                */
                MaxLength: 10,
                /** 
                * Verifica valor.
                *
                * @memberof String.Pattern.World.Dates.Date
                * @static
                *
                * @param {String}           v                                       Valor.
                *
                * @type {Boolean}
                */
                Check: function (v) {
                    return String.Pattern.CheckDateTime(v, this);
                },
                /** 
                * Formata valor.
                *
                * @memberof String.Pattern.World.Dates.Date
                * @static
                *
                * @param {String}           v                                       Valor.
                *
                * @type {String}
                */
                Format: function (v) {
                    return String.Pattern.StandardizeDate(v, this.Mask);
                }
            },
            /**
            * Definição do formato "Month".
            *
            * @memberof String.Pattern.World.Dates
            * @static
            *
            * @type {DataDefinition}
            */
            Month: {
                /** 
                * Máscara do tipo. 
                *
                * @memberof String.Pattern.World.Dates.Month
                * @static
                *
                * @type {?String}
                */
                Mask: 'yyyy-MM',
                /** 
                * Expressão regular para validação. 
                *
                * @memberof String.Pattern.World.Dates.Month
                * @static
                *
                * @type {RegExp}
                */
                RegExp: /^(\d{4})[\/\-.]([0]?[1-9]|[1][012])$/,
                /** 
                * Valor mínimo em caracteres para expressar o formato.
                *
                * @memberof String.Pattern.World.Number
                * @static
                *
                * @type {Integer}
                */
                MinLength: 7,
                /** 
                * Valor máximo em caracteres para expressar o formato.
                *
                * @memberof String.Pattern.World.Number
                * @static
                * 
                * @type {Integer}
                */
                MaxLength: 7,
                /** 
                * Verifica valor.
                *
                * @memberof String.Pattern.World.Dates.Month
                * @static
                *
                * @param {String}           v                                       Valor.
                *
                * @type {Boolean}
                */
                Check: function (v) {
                    return String.Pattern.CheckDateTime(v, this);
                },
                /** 
                * Formata valor.
                *
                * @memberof String.Pattern.World.Dates.Month
                * @static
                *
                * @param {String}           v                                       Valor.
                *
                * @type {String}
                */
                Format: function (v) {
                    return String.Pattern.StandardizeDate(v, this.Mask);
                }
            },
            /**
            * Definição do formato "Week".
            *
            * @memberof String.Pattern.World.Dates
            * @static
            *
            * @type {DataDefinition}
            */
            Week: {
                /** 
                * Máscara do tipo. 
                *
                * @memberof String.Pattern.World.Dates.Week
                * @static
                *
                * @type {?String}
                */
                Mask: 'yyyy-Wxx-d',
                /** 
                * Expressão regular para validação. 
                *
                * @memberof String.Pattern.World.Dates.Week
                * @static
                *
                * @type {RegExp}
                */
                RegExp: /^(\d{4})[-]([W]?)([0]?[1-9]|[1-4][0-9]|[5][0-3])[-]([1-7])$/,
                /** 
                * Valor mínimo em caracteres para expressar o formato.
                *
                * @memberof String.Pattern.World.Number
                * @static
                *
                * @type {Integer}
                */
                MinLength: 11,
                /** 
                * Valor máximo em caracteres para expressar o formato.
                *
                * @memberof String.Pattern.World.Number
                * @static
                * 
                * @type {Integer}
                */
                MaxLength: 11,
                /** 
                * Verifica valor.
                *
                * @memberof String.Pattern.World.Dates.Week
                * @static
                *
                * @param {String}           v                                       Valor.
                * @param {RegExp}           [rE]                                    RegExp usado para validação do formato.
                *
                * @type {Boolean}
                */
                Check: function (v, rE) {
                    rE = (rE === undefined) ? this.RegExp : rE;


                    // Identificando que se trata de uma possível data week...
                    if (v.IsPatternMatch(rE) && ((v.length == 7 || v.length == 9) ||
                        (v.toLowerCase().indexOf('w') != -1 && (v.length == 8 || v.length == 10)))) {

                        // Splita suas partes
                        var wF = v.toLowerCase().replace('w', '').replace(/-/g, ' ').split(' ');

                        if (wF.length == 2 || wF.length == 3) {
                            var y = null;
                            var n = null;
                            var d = null;

                            if (wF.length == 2) { d = 1; }

                            if (wF[0].length == 4) {
                                y = wF[0];
                                n = wF[1];
                                if (wF.length == 3) { d = wF[2]; }
                            }
                            else {
                                if (wF.length == 3) {
                                    y = wF[2];
                                    n = wF[1];
                                    d = wF[0];
                                }
                                else {
                                    y = wF[1];
                                    n = wF[0];
                                }
                            }

                            // Encontrando os atributos da data, testa se ela é verdadeira
                            if (!isNaN(y) && !isNaN(n) && !isNaN(d)) {
                                // Se o dia está dentro do intervalo correto
                                if (d >= 1 && d <= 7) {
                                    var AddDays = function (d, add) {
                                        var o = new Date(d.getTime()); o.setDate(d.getDate() + add); return o;
                                    };
                                    var FirstWeekOfYear = function (y) {
                                        var o = new Date(y, 0, 1); o = AddDays(o, (parseInt((11 - o.getDay()) % 7, 10))); return AddDays(o, -3);
                                    };
                                    var LastWeekOfYear = function (y) {
                                        var o = FirstWeekOfYear(parseInt(y, 10) + 1); return AddDays(o, -7);
                                    };
                                    var WeeksInYear = function (y) {
                                        return parseInt((AddDays(LastWeekOfYear(y), 7).getTime() - FirstWeekOfYear(y).getTime()) / (24 * 3600 * 1000), 10) / 7;
                                    };

                                    // Se a semana for um numeral correto
                                    if (n >= 1 && n <= 52 || (n == 53 && WeeksInYear(y) == 53)) {
                                        return true;
                                    }
                                }
                            }
                        }
                    }

                    return false;
                },
                /** 
                * Formata valor.
                *
                * @memberof String.Pattern.World.Dates.Week
                * @static
                *
                * @param {String}           v                                       Valor.
                *
                * @type {String}
                */
                Format: function (v) {
                    return String.Pattern.StandardizeWeekDate(v, 'week');
                }
            },
            /**
            * Definição do formato "Time".
            *
            * @memberof String.Pattern.World.Dates
            * @static
            *
            * @type {DataDefinition}
            */
            Time: {
                /** 
                * Máscara do tipo. 
                *
                * @memberof String.Pattern.World.Dates.Time
                * @static
                *
                * @type {?String}
                */
                Mask: 'HH:mm:ss',
                /** 
                * Expressão regular para validação. 
                *
                * @memberof String.Pattern.World.Dates.Time
                * @static
                *
                * @type {RegExp}
                */
                RegExp: /^([01]?\d|2[0-3]):([0-5]?\d):([0-5]?\d)$/,
                /** 
                * Valor mínimo em caracteres para expressar o formato.
                *
                * @memberof String.Pattern.World.Number
                * @static
                *
                * @type {Integer}
                */
                MinLength: 8,
                /** 
                * Valor máximo em caracteres para expressar o formato.
                *
                * @memberof String.Pattern.World.Number
                * @static
                * 
                * @type {Integer}
                */
                MaxLength: 8,
                /** 
                * Verifica valor.
                *
                * @memberof String.Pattern.World.Dates.Time
                * @static
                *
                * @param {String}           v                                       Valor.
                *
                * @type {Boolean}
                */
                Check: function (v) {
                    return String.Pattern.CheckDateTime(v, this);
                },
                /** 
                * Formata valor.
                *
                * @memberof String.Pattern.World.Dates.Time
                * @static
                *
                * @param {String}           v                                       Valor.
                *
                * @type {String}
                */
                Format: function (v) {
                    return String.Pattern.StandardizeDate(v, this.Mask);
                }
            }
        }
    },





    /**
    * Formatos padrões para o Brasil.
    *
    * @class Pattern.Brasil
    *
    * @memberof Pattern
    *
    * @static
    *
    * @type {Class}
    *
    * @property {NumberDefinition}              Number                              Definições para números.
    * @property {DataDefinition}                ZipCode                             Definição do formato "ZipCode" (CEP)
    * @property {DataDefinition}                Phone                               Definição do formato "Phone" (Cod área(2d) + 8|9 dígitos)
    * @property {DataDefinition}                CPF                                 Definição do formato "CPF"
    * @property {DataDefinition}                CNPJ                                Definição do formato "CNPJ"
    * @property {Object}                        Dates                               Formatos de data utilizadas no Brasil.
    * @property {DataDefinition}                Dates.Date                          Definição do formato "Date".
    * @property {DataDefinition}                Dates.Month                         Definição do formato "Month".
    * @property {DataDefinition}                Dates.Week                          Definição do formato "Week".
    */
    Brasil: {
        /**
        * Definições para números.
        *
        * @memberof Pattern.Brasil
        * @static
        *
        * @type {NumberDefinition}
        */
        Number: {
            /** 
            * Separador decimal. 
            */
            Decimal: ',',
            /**
            * Separador de milhar.
            */
            Thousand: '.',
            /** 
            * Verifica valor.
            *
            * @memberof String.Pattern.Brasil.Number
            * @static
            *
            * @param {String}               v                                       Valor.
            *
            * @type {Boolean}
            */
            Check: function (v) {
                return String.Pattern.World.Number.Check(v);
            },
            /** 
            * Formata valor.
            *
            * @memberof String.Pattern.Brasil.Number
            * @static
            *
            * @param {String}               v                                       Valor.
            * @param {Integer}              [nDec = 0]                              Quantidade de digitos após o divisor decimal.
            *
            * @type {String}
            */
            Format: function (v, nDec) {
                return String.Pattern.World.Number.Format(v, this, nDec);
            }
        },
        /**
        * Definição do formato "ZipCode" (CEP)
        *
        * @memberof Pattern.Brasil
        * @static
        *
        * @type {DataDefinition}
        */
        ZipCode: {
            /** 
            * Máscara do tipo. 
            *
            * @memberof String.Pattern.Brasil.ZipCode
            * @static
            *
            * @type {?String}
            */
            Mask: null,
            /** 
            * Expressão regular para validação. 
            *
            * @memberof String.Pattern.Brasil.ZipCode
            * @static
            *
            * @type {RegExp}
            */
            RegExp: /^([\d]{8})|((([\d]{5})|(([\d]{2})([.]{1,1})([\d]{3})))([-]{1,1})(\d{3}))$/,
            /** 
            * Valor mínimo em caracteres para expressar o formato.
            *
            * @memberof String.Pattern.World.Number
            * @static
            *
            * @type {Integer}
            */
            MinLength: 9,
            /** 
            * Valor máximo em caracteres para expressar o formato.
            *
            * @memberof String.Pattern.World.Number
            * @static
            * 
            * @type {Integer}
            */
            MaxLength: 9,
            /** 
            * Verifica valor.
            *
            * @memberof String.Pattern.Brasil.ZipCode
            * @static
            *
            * @param {String}               v                                       Valor.
            *
            * @type {Boolean}
            */
            Check: function (v) {
                return v.IsPatternMatch(this.RegExp);
            },
            /** 
            * Formata valor.
            *
            * @memberof String.Pattern.Brasil.ZipCode
            * @static
            *
            * @param {String}               v                                       Valor.
            *
            * @type {String}
            */
            Format: function (v) {
                v = v.OnlyCharCollection('1234567890');
                if (v.length == 8) {
                    return v.substring(0, 2) + '.' + v.substring(2, 5) + '-' + v.substring(5, 8);
                }
                return v;
            }
        },
        /**
        * Definição do formato "Phone" (Cod área(2d) + 8|9 dígitos)
        *
        * @memberof Pattern.Brasil
        * @static
        *
        * @type {DataDefinition}
        */
        Phone: {
            /** 
            * Máscara do tipo. 
            *
            * @memberof String.Pattern.Brasil.Phone
            * @static
            *
            * @type {?String}
            */
            Mask: null,
            /** 
            * Expressão regular para validação. 
            *
            * @memberof String.Pattern.Brasil.Phone
            * @static
            *
            * @type {RegExp}
            */
            RegExp: /^([0-9]{10,11})|(([\(][0-9]{2}[\)][ ])|([0-9]{2}[ ]))(([0-9]{4}[.| |-][0-9]{4}$)|([0-9]{3}[.| |-][0-9]{3}[.| |-][0-9]{3}$))/,
            /** 
            * Valor mínimo em caracteres para expressar o formato.
            *
            * @memberof String.Pattern.World.Number
            * @static
            *
            * @type {Integer}
            */
            MinLength: 10,
            /** 
            * Valor máximo em caracteres para expressar o formato.
            *
            * @memberof String.Pattern.World.Number
            * @static
            * 
            * @type {Integer}
            */
            MaxLength: 15,
            /** 
            * Verifica valor.
            *
            * @memberof String.Pattern.Brasil.Phone
            * @static
            *
            * @param {String}               v                                       Valor.
            *
            * @type {Boolean}
            */
            Check: function (v) {
                return v.OnlyCharCollection('1234567890').IsPatternMatch(this.RegExp);
            },
            /** 
            * Formata valor.
            *
            * @memberof String.Pattern.Brasil.Phone
            * @static
            *
            * @param {String}               v                                       Valor.
            *
            * @type {String}
            */
            Format: function (v) {
                v = v.OnlyCharCollection('1234567890');

                if (v.length == 10 || v.length == 11) {
                    var ddd = '(' + v.substring(0, 2) + ') ';

                    if (v.length == 10) {
                        return ddd + v.substring(2, 6) + '.' + v.substring(6, 10);
                    }
                    else {
                        return ddd + v.substring(2, 5) + '.' + v.substring(5, 8) + '.' + v.substring(8, 11);
                    }
                }

                return v;
            }
        },
        /**
        * Definição do formato "CPF"
        *
        * @memberof Pattern.Brasil
        * @static
        *
        * @type {DataDefinition}
        */
        CPF: {
            /** 
            * Máscara do tipo. 
            *
            * @memberof String.Pattern.Brasil.CPF
            * @static
            *
            * @type {?String}
            */
            Mask: null,
            /** 
            * Expressão regular para validação. 
            *
            * @memberof String.Pattern.Brasil.CPF
            * @static
            *
            * @type {RegExp}
            */
            RegExp: /^[0-9]{3}[.][0-9]{3}[.][0-9]{3}[-][0-9]{2}$/,
            /** 
            * Valor mínimo em caracteres para expressar o formato.
            *
            * @memberof String.Pattern.World.Number
            * @static
            *
            * @type {Integer}
            */
            MinLength: 11,
            /** 
            * Valor máximo em caracteres para expressar o formato.
            *
            * @memberof String.Pattern.World.Number
            * @static
            * 
            * @type {Integer}
            */
            MaxLength: 14,
            /** 
            * Verifica valor.
            *
            * @memberof String.Pattern.Brasil.CPF
            * @static
            *
            * @param {String}               v                                       Valor.
            *
            * @type {Boolean}
            */
            Check: function (v) {
                var cpf = v.OnlyCharCollection('1234567890');

                if (cpf.length == 11 && !isNaN(cpf)) {
                    if (cpf != '00000000000' && cpf != '11111111111' && cpf != '22222222222' &&
			            cpf != '33333333333' && cpf != '44444444444' && cpf != '55555555555' &&
			            cpf != '66666666666' && cpf != '77777777777' && cpf != '88888888888' &&
			            cpf != '99999999999') {

                        // Resgata dígitos especiais
                        var d1 = cpf.charAt(9);
                        var d2 = cpf.charAt(10);
                        var dV1 = null;
                        var dV2 = null;

                        // Descobre primeiro dígito verificador
                        var s = 0;
                        var cnt = 0;
                        for (var i = 10; i > 1; i--) {
                            s += parseInt(cpf.charAt(cnt) * (i)); cnt++;
                        }
                        dV1 = s % 11;
                        dV1 = (dV1 < 2) ? 0 : 11 - dV1;

                        // Descobre segundo dígito verificador
                        s = 0;
                        cnt = 0;
                        for (var i = 11; i > 1; i--) {
                            s += parseInt(cpf.charAt(cnt) * (i)); cnt++;
                        }
                        dV2 = s % 11;
                        dV2 = (dV2 < 2) ? 0 : 11 - dV2;

                        // Verifica se digitos estão corretos
                        if (d1 == dV1 && d2 == dV2) { return true; }
                    }
                }

                return false;
            },
            /** 
            * Formata valor.
            *
            * @memberof String.Pattern.Brasil.CPF
            * @static
            *
            * @param {String}               v                                       Valor.
            *
            * @type {String}
            */
            Format: function (v) {
                v = v.OnlyCharCollection('1234567890');
                if (v.length == 11) {
                    return v.substring(0, 3) + '.' + v.substring(3, 6) + '.' + v.substring(6, 9) + '-' + v.substring(9, 11);
                }
                return v;
            }
        },
        /**
        * Definição do formato "CNPJ"
        *
        * @memberof Pattern.Brasil
        * @static
        *
        * @type {DataDefinition}
        */
        CNPJ: {
            /** 
            * Máscara do tipo. 
            *
            * @memberof String.Pattern.Brasil.CNPJ
            * @static
            *
            * @type {?String}
            */
            Mask: null,
            /** 
            * Expressão regular para validação. 
            *
            * @memberof String.Pattern.Brasil.CNPJ
            * @static
            *
            * @type {RegExp}
            */
            RegExp: /^[0-9]{2}[.][0-9]{3}[.][0-9]{3}[\/][0-9]{4}[-][0-9]{2}$/,
            /** 
            * Valor mínimo em caracteres para expressar o formato.
            *
            * @memberof String.Pattern.World.Number
            * @static
            *
            * @type {Integer}
            */
            MinLength: 14,
            /** 
            * Valor máximo em caracteres para expressar o formato.
            *
            * @memberof String.Pattern.World.Number
            * @static
            * 
            * @type {Integer}
            */
            MaxLength: 18,
            /** 
            * Verifica valor.
            *
            * @memberof String.Pattern.Brasil.CNPJ
            * @static
            *
            * @param {String}               v                                       Valor.
            *
            * @type {Boolean}
            */
            Check: function (v) {
                var cnpj = v.OnlyCharCollection('1234567890');

                if (cnpj.length == 14 && !isNaN(cnpj)) {
                    // Se não for nenhum dos padrões inválidos de CNPJ...
                    if (cnpj != '00000000000000' && cnpj != '11111111111111' && cnpj != '22222222222222' &&
			            cnpj != '33333333333333' && cnpj != '44444444444444' && cnpj != '55555555555555' &&
			            cnpj != '66666666666666' && cnpj != '77777777777777' && cnpj != '88888888888888' &&
			            cnpj != '99999999999999') {

                        var a = [];
                        var b = 0;
                        var c = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
                        for (var i = 0; i < 12; i++) { a[i] = cnpj.charAt(i); b += a[i] * c[i + 1]; }

                        var x = b % 11;
                        a[12] = (x < 2) ? 0 : 11 - x;


                        b = 0;
                        for (var y = 0; y < 13; y++) { b += (a[y] * c[y]); }
                        var x = b % 11;
                        a[13] = (x < 2) ? 0 : 11 - x;

                        if ((cnpj.charAt(12) == a[12]) && (cnpj.charAt(13) == a[13])) { return true; }
                    }
                }

                return false;
            },
            /** 
            * Formata valor.
            *
            * @memberof String.Pattern.Brasil.CNPJ
            * @static
            *
            * @param {String}               v                                       Valor.
            *
            * @type {String}
            */
            Format: function (v) {
                v = v.OnlyCharCollection('1234567890');
                if (v.length == 14) {
                    return v.substring(0, 2) + '.' + v.substring(2, 5) + '.' + v.substring(5, 8) + '/' + v.substring(8, 12) + '-' + v.substring(12, 14);
                }
                return v;
            }
        },
        /**
        * Formatos de data utilizadas no Brasil.
        *
        * @memberof Pattern.Brasil
        * @static
        *
        * @type {Object}
        */
        Dates: {
            /**
            * Definição do formato "Date".
            *
            * @memberof String.Pattern.Brasil.Dates
            * @static
            *
            * @type {DataDefinition}
            */
            Date: {
                /** 
                * Máscara do tipo. 
                *
                * @memberof String.Pattern.Brasil.Dates.Date
                * @static
                *
                * @type {?String}
                */
                Mask: 'dd-MM-yyyy',
                /** 
                * Expressão regular para validação. 
                *
                * @memberof String.Pattern.Brasil.Dates.Date
                * @static
                *
                * @type {RegExp}
                */
                RegExp: /^([0]?[1-9]|[12][0-9]|[3][01])[\/\-.]([0]?[1-9]|[1][012])[\/\-.](\d{4})$/,
                /** 
                * Valor mínimo em caracteres para expressar o formato.
                *
                * @memberof String.Pattern.World.Number
                * @static
                *
                * @type {Integer}
                */
                MinLength: 10,
                /** 
                * Valor máximo em caracteres para expressar o formato.
                *
                * @memberof String.Pattern.World.Number
                * @static
                * 
                * @type {Integer}
                */
                MaxLength: 10,
                /** 
                * Verifica valor.
                *
                * @memberof String.Pattern.Brasil.Dates.Date
                * @static
                *
                * @param {String}           v                                       Valor.
                *
                * @type {Boolean}
                */
                Check: function (v) {
                    return String.Pattern.CheckDateTime(v, this);
                },
                /** 
                * Formata valor.
                *
                * @memberof String.Pattern.Brasil.Dates.Date
                * @static
                *
                * @param {String}           v                                       Valor.
                *
                * @type {String}
                */
                Format: function (v) {
                    return String.Pattern.StandardizeDate(v, this.Mask);
                }
            },
            /**
            * Definição do formato "Month".
            *
            * @memberof String.Pattern.Brasil.Dates
            * @static
            *
            * @type {DataDefinition}
            */
            Month: {
                /** 
                * Máscara do tipo. 
                *
                * @memberof String.Pattern.Brasil.Dates.Month
                * @static
                *
                * @type {?String}
                */
                Mask: 'MM-yyyy',
                /** 
                * Expressão regular para validação. 
                *
                * @memberof String.Pattern.Brasil.Dates.Month
                * @static
                *
                * @type {RegExp}
                */
                RegExp: /^([0]?[1-9]|[1][012])[\/\-.](\d{4})$/,
                /** 
                * Valor mínimo em caracteres para expressar o formato.
                *
                * @memberof String.Pattern.World.Number
                * @static
                *
                * @type {Integer}
                */
                MinLength: 7,
                /** 
                * Valor máximo em caracteres para expressar o formato.
                *
                * @memberof String.Pattern.World.Number
                * @static
                * 
                * @type {Integer}
                */
                MaxLength: 7,
                /** 
                * Verifica valor.
                *
                * @memberof String.Pattern.Brasil.Dates.Month
                * @static
                *
                * @param {String}           v                                       Valor.
                *
                * @type {Boolean}
                */
                Check: function (v) {
                    return String.Pattern.CheckDateTime(v, this);
                },
                /** 
                * Formata valor.
                *
                * @memberof String.Pattern.Brasil.Dates.Month
                * @static
                *
                * @param {String}           v                                       Valor.
                *
                * @type {String}
                */
                Format: function (v) {
                    return String.Pattern.StandardizeDate(v, this.Mask);
                }
            },
            /**
            * Definição do formato "Week".
            *
            * @memberof String.Pattern.Brasil.Dates
            * @static
            *
            * @type {DataDefinition}
            */
            Week: {
                /** 
                * Máscara do tipo. 
                *
                * @memberof String.Pattern.Brasil.Dates.Week
                * @static
                *
                * @type {?String}
                */
                Mask: 'd-xxW-yyyy',
                /** 
                * Expressão regular para validação. 
                *
                * @memberof String.Pattern.Brasil.Dates.Week
                * @static
                *
                * @type {RegExp}
                */
                RegExp: /^([1-7])[-]([0]?[1-9]|[1-4][0-9]|[5][0-3])([W]?)[-](\d{4})$/,
                /** 
                * Valor mínimo em caracteres para expressar o formato.
                *
                * @memberof String.Pattern.World.Number
                * @static
                *
                * @type {Integer}
                */
                MinLength: 10,
                /** 
                * Valor máximo em caracteres para expressar o formato.
                *
                * @memberof String.Pattern.World.Number
                * @static
                * 
                * @type {Integer}
                */
                MaxLength: 10,
                /** 
                * Verifica valor.
                *
                * @memberof String.Pattern.Brasil.Dates.Week
                * @static
                *
                * @param {String}           v                                       Valor.
                *
                * @type {Boolean}
                */
                Check: function (v) {
                    return String.Pattern.World.Dates.Week.Check(v, this.RegExp);
                },
                /** 
                * Formata valor.
                *
                * @memberof String.Pattern.Brasil.Dates.Week
                * @static
                *
                * @param {String}           v                                       Valor.
                *
                * @type {String}
                */
                Format: function (v) {
                    return String.Pattern.StandardizeWeekDate(v, 'weekbr');
                }
            }
        }
    },





    /**
    * Formatos padrões para o EUA.
    *
    * @class Pattern.EUA
    *
    * @memberof Pattern
    *
    * @static
    *
    * @type {Class}
    *
    * @property {NumberDefinition}              Number                              Definições para números.
    * @property {DataDefinition}                ZipCode                             Definição do formato "ZipCode"
    * @property {DataDefinition}                Phone                               Definição do formato "Phone" (Cod área(3d) + 7 dígitos)
    * @property {Object}                        Dates                               Formatos de data utilizadas nos EUA.
    * @property {DataDefinition}                Dates.Date                          Definição do formato "Date".
    */
    EUA: {
        /**
        * Definições para números.
        *
        * @memberof Pattern.EUA
        * @static
        *
        * @type {NumberDefinition}
        */
        Number: {
            /** 
            * Separador decimal. 
            */
            Decimal: '.',
            /**
            * Separador de milhar.
            */
            Thousand: ',',
            /** 
            * Verifica valor.
            *
            * @memberof String.Pattern.EUA.Number
            * @static
            *
            * @param {String}               v                                       Valor.
            *
            * @type {Boolean}
            */
            Check: function (v) {
                return String.Pattern.World.Number.Check(v);
            },
            /** 
            * Formata valor.
            *
            * @memberof String.Pattern.EUA.Number
            * @static
            *
            * @param {String}               v                                       Valor.
            * @param {Integer}              [nDec = 0]                              Quantidade de digitos após o divisor decimal.
            *
            * @type {String}
            */
            Format: function (v, nDec) {
                return String.Pattern.World.Number.Format(v, this, nDec);
            }
        },
        /**
        * Definição do formato "ZipCode"
        *
        * @memberof Pattern.EUA
        * @static
        *
        * @type {DataDefinition}
        */
        ZipCode: {
            /** 
            * Máscara do tipo. 
            *
            * @memberof String.Pattern.EUA.ZipCode
            * @static
            *
            * @type {?String}
            */
            Mask: null,
            /** 
            * Expressão regular para validação. 
            *
            * @memberof String.Pattern.EUA.ZipCode
            * @static
            *
            * @type {RegExp}
            */
            RegExp: /(^\d{5}$)|(^\d{5}-\d{4}$)|(^\d{5}\d{4}$)/,
            /** 
            * Valor mínimo em caracteres para expressar o formato.
            *
            * @memberof String.Pattern.World.Number
            * @static
            *
            * @type {Integer}
            */
            MinLength: 5,
            /** 
            * Valor máximo em caracteres para expressar o formato.
            *
            * @memberof String.Pattern.World.Number
            * @static
            * 
            * @type {Integer}
            */
            MaxLength: 10,
            /** 
            * Verifica valor.
            *
            * @memberof String.Pattern.EUA.ZipCode
            * @static
            *
            * @param {String}           v                                           Valor.
            *
            * @type {Boolean}
            */
            Check: function (v) {
                return v.IsPatternMatch(this.RegExp);
            },
            /** 
            * Formata valor.
            *
            * @memberof String.Pattern.EUA.ZipCode
            * @static
            *
            * @param {String}           v                                           Valor.
            *
            * @type {String}
            */
            Format: function (v) {
                v = v.OnlyCharCollection('1234567890');
                if (v.length == 9) {
                    return v.substring(0, 5) + '-' + v.substring(5, 9);
                }
                return v;
            }
        },
        /**
        * Definição do formato "Phone" (Cod área(3d) + 7 dígitos)
        *
        * @memberof Pattern.EUA
        * @static
        *
        * @type {DataDefinition}
        */
        Phone: {
            /** 
            * Máscara do tipo. 
            *
            * @memberof String.Pattern.EUA.Phone
            * @static
            *
            * @type {?String}
            */
            Mask: null,
            /** 
            * Expressão regular para validação. 
            *
            * @memberof String.Pattern.EUA.Phone
            * @static
            *
            * @type {RegExp}
            */
            RegExp: /^([0-9]{10})|(([\(][0-9]{3}[\)][ ])|([0-9]{3}[ ]))([0-9]{3}[.| |-][0-9]{4}$)/,
            /** 
            * Valor mínimo em caracteres para expressar o formato.
            *
            * @memberof String.Pattern.World.Number
            * @static
            *
            * @type {Integer}
            */
            MinLength: 10,
            /** 
            * Valor máximo em caracteres para expressar o formato.
            *
            * @memberof String.Pattern.World.Number
            * @static
            * 
            * @type {Integer}
            */
            MaxLength: 12,
            /** 
            * Verifica valor.
            *
            * @memberof String.Pattern.EUA.Phone
            * @static
            *
            * @param {String}           v                                           Valor.
            *
            * @type {Boolean}
            */
            Check: function (v) {
                return v.IsPatternMatch(this.RegExp);
            },
            /** 
            * Formata valor.
            *
            * @memberof String.Pattern.EUA.Phone
            * @static
            *
            * @param {String}           v                                           Valor.
            *
            * @type {String}
            */
            Format: function (v) {
                v = v.OnlyCharCollection('1234567890');

                if (v.length == 10) {
                    return '(' + v.substring(0, 3) + ') ' + v.substring(3, 6) + '-' + v.substring(6, 10);
                }

                return v;
            }
        },
        /**
        * Formatos de data utilizadas nos EUA.
        *
        * @memberof Pattern.EUA
        * @static
        *
        * @type {Object}
        */
        Dates: {
            /**
            * Definição do formato "Date".
            *
            * @memberof String.Pattern.EUA.Dates
            * @static
            *
            * @type {DataDefinition}
            */
            Date: {
                /** 
                * Máscara do tipo. 
                *
                * @memberof String.Pattern.EUA.Dates.Date
                * @static
                *
                * @type {?String}
                */
                Mask: 'MM-dd-yyyy',
                /** 
                * Expressão regular para validação. 
                *
                * @memberof String.Pattern.EUA.Dates.Date
                * @static
                *
                * @type {RegExp}
                */
                RegExp: /^([0]?[1-9]|[1][012])[\/\-.]([0]?[1-9]|[12][0-9]|[3][01])[\/\-.](\d{4})$/,
                /** 
                * Valor mínimo em caracteres para expressar o formato.
                *
                * @memberof String.Pattern.World.Number
                * @static
                *
                * @type {Integer}
                */
                MinLength: 10,
                /** 
                * Valor máximo em caracteres para expressar o formato.
                *
                * @memberof String.Pattern.World.Number
                * @static
                * 
                * @type {Integer}
                */
                MaxLength: 10,
                /** 
                * Verifica valor.
                *
                * @memberof String.Pattern.EUA.Dates.Date
                * @static
                *
                * @param {String}           v                                       Valor.
                *
                * @type {Boolean}
                */
                Check: function (v) {
                    return String.Pattern.CheckDateTime(v, this);
                },
                /** 
                * Formata valor.
                *
                * @memberof String.Pattern.EUA.Dates.Date
                * @static
                *
                * @param {String}           v                                       Valor.
                *
                * @type {String}
                */
                Format: function (v) {
                    return String.Pattern.StandardizeDate(v, this.Mask);
                }
            }
        }
    }
};




















/**
* Verifica se a string é um numeral válido independente do formato (americano ou brasileiro).
*
* @function IsNumber
*
* @memberof String
*
* @return {Boolean}
*/
String.prototype.IsNumber = function() {
	return String.Pattern.World.Number.Check(this);
};

/**
* Verifica se a string é um e-mail válido.
*
* @function IsEmail
*
* @memberof String
*
* @return {Boolean}
*/
String.prototype.IsEmail = function () {
    return String.Pattern.World.Email.Check(this);
};

/**
* Verifica se a string é uma URL válida [http/s | ftp/s] até 2048 caracteres.
*
* @function IsURL
*
* @memberof String
*
* @return {Boolean}
*/
String.prototype.IsURL = function () {
    return String.Pattern.World.URL.Check(this);
};

/**
* Verifica se a string é uma cor no formato hexadecimal #FF00AA .
*
* @function IsColor
*
* @memberof String
*
* @return {Boolean}
*/
String.prototype.IsColor = function () {
	return String.Pattern.World.Color.Check(this);
};

/**
* Verifica se a string é um Locale válido.
*
* @function IsLocale
*
* @memberof String
*
* @return {Boolean}
*/
String.prototype.IsLocale = function () {
	return String.Pattern.World.Locale.Check(this);
};

/**
* Verifica se a string é uma data no formato yyyy-MM-ddTHH:mm:ssZ .
*
* @function IsDateTimeGlobalZone
*
* @memberof String
*
* @return {Boolean}
*/
String.prototype.IsDateTimeGlobalZone = function () {
    return String.Pattern.World.Dates.DateTimeGlobalZone.Check(this);
};

/**
* Verifica se a string é uma data no formato yyyy-MM-ddTHH:mm:ss .
*
* @function IsDateTimeLocal
*
* @memberof String
*
* @return {Boolean}
*/
String.prototype.IsDateTimeLocal = function () {
    return String.Pattern.World.Dates.DateTimeLocal.Check(this);
};

/**
* Verifica se a string é uma data no formato yyyy-MM-dd HH:mm:ss .
*
* @function IsDateTime
*
* @memberof String
*
* @return {Boolean}
*/
String.prototype.IsDateTime = function () {
    return String.Pattern.World.Dates.DateTime.Check(this);
};

/*
* Verifica se a string é uma data no formato yyyy-MM-dd .
*
* @function IsDate
*
* @memberof String
*
* @return {Boolean}
*/
String.prototype.IsDate = function () {
    return String.Pattern.World.Dates.Date.Check(this);
};

/**
* Verifica se a string é uma data no formato yyyy-MM .
*
* @function IsMonth
*
* @memberof String
*
* @return {Boolean}
*/
String.prototype.IsMonth = function () {
    return String.Pattern.World.Dates.Month.Check(this);
};

/**
* Verifica se a string é uma data no formato yyyy-Wxx-d .
*
* @function IsWeek
*
* @memberof String
*
* @return {Boolean}
*/
String.prototype.IsWeek = function () {
    return String.Pattern.World.Dates.Week.Check(this);
};

/**
* Verifica se a string é uma hora no formato HH:mm:ss .
*
* @function IsTime
*
* @memberof String
*
* @return {Boolean}
*/
String.prototype.IsTime = function () {
    return String.Pattern.World.Dates.Time.Check(this);
};




















/**
* Verifica se a string é um CEP válido [99.999-999] .
*
* @function IsZipCode_Br
*
* @memberof String
*
* @return {Boolean}
*/
String.prototype.IsZipCode_Br = function () {
    return String.Pattern.Brasil.ZipCode.Check(this);
};

/**
* Verifica se a string é um Número telefonico brasileiro com Código de Área (2 dígitos) + 8 ou 9 dígitos.
*
* @function IsPhone_Br
*
* @memberof String
*
* @return {Boolean}
*/
String.prototype.IsPhone_Br = function () {
    return String.Pattern.Brasil.Phone.Check(this);
};

/**
* Verifica se a string é um CPF válido(com ou sem formatação).
*
* @function IsCPF
*
* @memberof String
*
* @return {Boolean}
*/
String.prototype.IsCPF = function () {
    return String.Pattern.Brasil.CPF.Check(this);
};

/**
* Verifica se a String é um CNPJ válido(com ou sem formatação).
*
* @function IsCNPJ
*
* @memberof String
*
* @return {Boolean}
*/
String.prototype.IsCNPJ = function () {
    return String.Pattern.Brasil.CNPJ.Check(this);
};

/**
* Verifica se a string é uma data no formato dd-MM-yyyy .
*
* @function IsDate_Br
*
* @memberof String
*
* @return {Boolean}
*/
String.prototype.IsDate_Br = function () {
	return String.Pattern.Brasil.Dates.Date.Check(this);
};

/**
* Verifica se a string é uma data no formato MM-yyyy .
*
* @function IsMonth_Br
*
* @memberof String
*
* @return {Boolean}
*/
String.prototype.IsMonth_Br = function () {
	return String.Pattern.Brasil.Dates.Month.Check(this);
};

/**
* Verifica se a string é uma data no formato d-Wxx-yyyy .
*
* @function IsWeek_Br
*
* @memberof String
*
* @return {Boolean}
*/
String.prototype.IsWeek_Br = function () {
    return String.Pattern.Brasil.Dates.Week.Check(this);
};




















/**
* Verifica se a string é um ZipCode válido [99999 Ou 99999-9999] .
*
* @function IsZipCode_EUA
*
* @memberof String
*
* @return {Boolean}
*/
String.prototype.IsZipCode_EUA = function () {
    return String.Pattern.EUA.ZipCode.Check(this);
};

/**
* Verifica se a string é um Número telefonico dos EUA com Código de Área (3 digitos) + 7 dígitos.
*
* @function IsPhone_EUA
*
* @memberof String
*
* @return {Boolean}
*/
String.prototype.IsPhone_EUA = function () {
	return String.Pattern.EUA.Phone.Check(this);
};

/**
* Verifica se a string é uma data no formato MM-dd-yyyy.
*
* @function IsDate_EUA
*
* @memberof String
*
* @return {Boolean}
*/
String.prototype.IsDate_EUA = function () {
	return String.Pattern.EUA.Dates.Date.Check(this);
};




















/**
* Verifica se a String é uma senha válida conforme configurações padrões.
*
* @function IsPassword
*
* @memberof String
*
* @param {Boolean}                          [r = false]                             Quando "true" retorna os caracteres inválidos encontrados.
*
* @return {Boolean}
*/
String.prototype.IsPassword = function (r) {
    return String.Pattern.World.Password.Check(this, r);
};


/**
* Verifica se a extenção de um arquivo é válida dentro de um grupo definido.
*
* @function IsValidExtension
*
* @memberof String
*
* @param {String[]}                         arr                                     Lista de extenções válidas no formato ".ext".
*
* @return {Boolean}
*/
String.prototype.IsValidExtension = function (arr) {
	var fE = this.split('.');
	fE = '.' + fE[fE.length -1];
	
	for(var i=0; i<arr.length; i++) { if(fE == arr[i]) { return true; }	}
	return false;
};




















/**
* Formata adequadamente a URL indicada.
*
* @function FormatURL
*
* @memberof String
*
* @return {String}
*/
String.prototype.FormatURL = function () {
    return String.Pattern.World.URL.Format(this);
};

/**
* Formata a string para um locale.
*
* @function FormatLocale
*
* @memberof String
*
* @return {String}
*/
String.prototype.FormatLocale = function() {
    return String.Pattern.World.Locale.Format(this);
};

/**
* Pontua uma string numérica para apresentar divisor de milhar e divisor decimal.
* A String inicial não deve possuir formatação e seu divisor decimal deve ser '.'
*
* @function FormatNumeral
*
* @memberof String
*
* @param {NumberDefinition}                 [nD]                                    Definições dos separadores numéricos conforme cultura.
* @param {Integer}                          [nDec = 0]                              Quantidade de digitos após o divisor decimal.
*
* @return {String}
*/
String.prototype.FormatNumeral = function (nD, nDec) {
    return String.Pattern.World.Number.Format(this, nD, nDec);
};

/**
* Converte o numeral em uma string numérica para apresentar divisor de milhar e divisor decimal.
*
* @function FormatNumeral
*
* @memberof String
*
* @param {NumberDefinition}                 [nD]                                    Definições dos separadores numéricos conforme cultura.
* @param {Integer}                          [nDec = 0]                              Quantidade de digitos após o divisor decimal.
*
* @return {String}
*/
Number.prototype.FormatNumeral = function (nD, nDec) {
    return String.Pattern.World.Number.Format(this.toString(), nD, nDec);
};

/**
* Completa a string de código conforme os parametros passados.
*
* @function CompleteCodeWith
*
* @memberof String
*
* @param {Integer}                          tot                                     Número Total de Digitos que o Código deve Conter.
* @param {String}                           [ch = '0']                              String utilizada para completar o código.
* @param {Boolean}                          [f = true]                              Se "true" adiciona caracteres à frente do código.
*
* @return {String}
*/
String.prototype.CompleteCodeWith = function (tot, ch, f) {
    var s = this;
    ch = (ch === undefined) ? '0' : ch;
    f = (f === undefined) ? true : f;

    var left = tot - s.length;
    var cLeft = '';

    for (var i = 0; i < left; i++) { cLeft += ch; }
    return (f) ? cLeft + s : s + cLeft;
};




















/**
* Formata a string para um CEP.
*
* @function FormatZipCode_Br
*
* @memberof String
*
* @return {String}
*/
String.prototype.FormatZipCode_Br = function () {
    return String.Pattern.Brasil.ZipCode.Format(this);
};

/**
* Formata a string para um Telefone Brasileiro (DDD + Fone).
*
* @function FormatPhone_Br
*
* @memberof String
*
* @return {String}
*/
String.prototype.FormatPhone_Br = function() {
    return String.Pattern.Brasil.Phone.Format(this);
};

/**
* Formata a string para um CPF.
*
* @function FormatCPF
*
* @memberof String
*
* @return {String}
*/
String.prototype.FormatCPF = function() {
    return String.Pattern.Brasil.CPF.Format(this);
};

/**
* Formata a string para um CNPJ.
*
* @function FormatCNPJ
*
* @memberof String
*
* @return {String}
*/
String.prototype.FormatCNPJ = function() {
    return String.Pattern.Brasil.CNPJ.Format(this);
};

/**
* Pontua uma string numérica para apresentar divisor de milhar e divisor decimal formato brasileiro.
*
* @function FormatNumeral_Br
*
* @memberof String
*
* @param {Integer}                          [nDec = 0]                              Quantidade de digitos após o divisor decimal.
*
* @return {String}
*/
String.prototype.FormatNumeral_Br = function(nDec) {
    return String.Pattern.Brasil.Number.Format(this, nDec);
};

/**
* Converte o numeral em uma string numérica com divisor de milhar e divisor decimal formato brasileiro.
*
* @function FormatNumeral_Br
*
* @memberof String
*
* @param {Integer}                          [nDec = 0]                              Quantidade de digitos após o divisor decimal.
*
* @return {String}
*/
Number.prototype.FormatNumeral_Br = function(nDec) {
	return String.Pattern.Brasil.Number.Format(this, nDec);
};




















/**
* Formata a string para um ZipCode dos EUA.
*
* @function FormatZipCode_EUA
*
* @memberof String
*
* @return {String}
*/
String.prototype.FormatZipCode_EUA = function () {
    return String.Pattern.EUA.ZipCode.Format(this);
};

/**
* Formata a string para um Telefone dos EUA (Código de Área + Fone).
*
* @function FormatPhone_EUA
*
* @memberof String
*
* @return {String}
*/
String.prototype.FormatPhone_EUA = function() {
    return String.Pattern.EUA.Phone.Format(this);
};























/**
* Converte a instância Date para um formato string conforme informado.
*
* @function ToString
*
* @memberof String
*
* @param {String}                           [f = 'yyyy/MM/dd HH:mm:ss']             Formato para o retorno da data.
*
* @return {String}
*/
Date.prototype.ToString = function (f) {
    var sR = '';
    f = (f === undefined) ? 'yyyy/MM/dd HH:mm:ss' : f;

    var y = this.getFullYear().toString();
    var M = (this.getMonth() + 1).toString();
    var d = this.getDate().toString();
    var H = this.getHours().toString();
    var m = this.getMinutes().toString();
    var s = this.getSeconds().toString();


    // Adiciona 2 digitos a todas partes
    M = (M.length == 1) ? '0' + M : M;
    d = (d.length == 1) ? '0' + d : d;
    H = (H.length == 1) ? '0' + H : H;
    m = (m.length == 1) ? '0' + m : m;
    s = (s.length == 1) ? '0' + s : s;


    // Monta string da data
    var cY = 0;
    var cM = 0;
    var cD = 0;
    var cH = 0;
    var cMi = 0;
    var cS = 0;


    for (var i = 0; i < f.length; i++) {
        var c = f.charAt(i);
        switch (c) {
            case 'y':
                sR += y.charAt(cY); cY++;
                break;

            case 'M':
                sR += M.charAt(cM); cM++;
                break;

            case 'd':
                sR += d.charAt(cD); cD++;
                break;

            case 'H':
                sR += H.charAt(cH); cH++;
                break;

            case 'm':
                sR += m.charAt(cMi); cMi++;
                break;

            case 's':
                sR += s.charAt(cS); cS++;
                break;

            default:
                sR += c;
                break;
        }
    }

    return sR;
};

/**
* Converte a string em um objeto Date mediante a especificação do formato.
*
* @function ToDate
*
* @memberof String
*
* @param {String}                           mk                                      Máscara da data.
*
* @return {?Date}
*/
String.prototype.ToDate = function (dF) {
    return String.Pattern.FormatDateTime(this, dF);
};




















/**
* Testa a força da string enquanto senha e retorna sua pontuação.
*
* @function PasswordStrength
*
* @memberof String
*
* @return {Integer}
*/
String.prototype.PasswordStrength = function () {
    return String.Pattern.World.Password.Strength(this);
};

/**
* Gera uma senha de forma aleatória baseada nas configurações passadas.
* O tamanho da senha será o valor informado em cfg.MinLength
*
* @function GeneratePassword
*
* @param {PasswordConfig}       [cfg]                                   Configurações da senha que será gerada. Usará os valores padrões caso não seja informado.
*
* @return {String}
*/
var GeneratePassword = function (cfg) {
    return String.Pattern.World.Password.Generate(cfg);
};
