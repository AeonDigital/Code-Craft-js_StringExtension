 Code Craft - StringExtension
==============================

> [Aeon Digital](http://www.aeondigital.com.br)
>
> rianna@aeondigital.com.br


**Code Craft** é um conjunto de soluções front-end e outras server-side para a construção de aplicações web.
Tais soluções aqui apresentadas são a minha forma de compartilhar com a `comunidade online` parte do que aprendi 
(e continuo aprendendo) nos foruns, sites, blogs, livros e etc. assim como na experiência adquirida no contato
direto com profissionais e estudantes que, como eu, amam o universo `Web Developer` e nunca se dão por satisfeitos 
com seu nível atual de conhecimento.


## C.C. - StringExtension

A seguinte bibliotéca extende as funcionalidades do objeto `String` adicionando opções ou, variações
de manipulação percebidas como necessárias para facilitar o processo de lidar com estes objetos
em javascript.


### Inserir, Remover, Alterar ou Substituir

* `Insert`                  : Insere uma string no indice indicado da string original.
* `Remove`                  : Remove uma cadeia de caracteres dentro dos limites indicados.
* `Trim`                    : Remove espaços em branco no inicio e no final da string.
* `RemoveChars`             : Remove da string todas as ocorrências da cadeia de caracteres informado.
* `OnlyCharCollection`      : Mantem apenas os caracteres que pertencem a string de válidos.
* `ReplaceAll`              : Substitui toda ocorrência de determinada string por uma outra definida.
* `MaxWordsExpression`      : Limita a sentença à um número máximo de palavras.
* `MaxCharExpression`       : Limita uma sentença à um número máximo de caracteres.
* `ReplaceGlyphs`           : Transforma todos caracteres com glifos para seu equivalente sem glifo.
* `ConvertStringToXMLValue` : Substitui qualquer caracter reservado XML para seu equivalente em entitie X/HTML.
* `ConvertXMLValueToString` : Substitui entities X/HTML para seus caracteres equivalentes.
* `UpperCaseFirst`          : Transforma a primeira letra da sentança em seu formato em maiuscula.


### Teste de padrões internacionais

* `IsNumber`                : Verifica se a string é um numeral válido.
* `IsEmail`                 : Verifica se a string é um e-mail válido.
* `IsURL`                   : Verifica se a string é uma URL válida [http/s | ftp/s] até 2048 caracteres.
* `IsColor`                 : Verifica se a string é uma cor no formato hexadecimal #FF00AA .
* `IsLocale`                : Verifica se a string é um Locale válido.
* `ValidateDateTime`        : Valida uma string de data.
* `IsDateTimeGlobalZone`    : Verifica se a string é uma data no formato yyyy-MM-ddTHH:mm:ssZ .
* `IsDateTimeLocal`         : Verifica se a string é uma data no formato yyyy-MM-ddTHH:mm:ss .
* `IsDateTime`              : Verifica se a string é uma data no formato yyyy-MM-dd HH:mm:ss .
* `IsDate`                  : Verifica se a string é uma data no formato yyyy-MM-dd .
* `IsMonth`                 : Verifica se a string é uma data no formato yyyy-MM .
* `IsWeek`                  : Verifica se a string é uma data no formato yyyy-Wxx-d .
* `IsTime`                  : Verifica se a string é uma hora no formato HH:mm:ss .


### Teste de padrões brasileiros

* `IsZipCode_Br`            : Verifica se a string é um CEP válido [99.999-999] .
* `IsPhone_Br`              : Verifica se a string é um Número telefonico brasileiro com Código de Área (2 dígitos) + 8 ou 9 dígitos.
* `IsCPF`                   : Verifica se a string é um CPF válido(com ou sem formatação).
* `IsCNPJ`                  : Verifica se a string é um CNPJ válido(com ou sem formatação).
* `IsDate_Br`               : Verifica se a string é uma data no formato dd-MM-yyyy .
* `IsMonth_Br`              : Verifica se a string é uma data no formato MM-yyyy .
* `IsWeek_Br`               : Verifica se a string é uma data no formato d-Wxx-yyyy .


### Teste de padrões dos EUA

* `IsZipCode_EUA`           : Verifica se a string é um ZipCode válido [99999 Ou 99999-9999] .
* `IsPhone_EUA`             : Verifica se a string é um Número telefonico dos EUA com Código de Área (3 digitos) + 7 dígitos.
* `IsDate_EUA`              : Verifica se a string é uma data no formato MM-dd-yyyy.


### Validações incomuns

* `IsPassword`              : Verifica se a String é uma senha válida conforme configurações padrões.
* `IsValidExtension`        : Verifica se a extenção de um arquivo é válida dentro de um grupo definido.


### Formatação de tipos especiais

* `FormatURL`               : Formata adequadamente a URL indicada.
* `FormatLocale`            : Formata a string para um locale.
* `FormatNumeral`           : Pontua uma string numérica para apresentar divisor de milhar e divisor decimal.
* `CompleteCodeWith`        : Completa a string de código conforme os parametros passados.


### Formatação de tipos de string para Brasil

* `FormatZipCode_Br`        : Formata a string para um CEP.
* `FormatPhone_Br`          : Formata a string para um Telefone Brasileiro (DDD + Fone).
* `FormatCPF`               : Formata a string para um CPF.
* `FormatCNPJ`              : Formata a string para um CNPJ.
* `FormatNumeral_Br`        : Pontua uma string numérica para apresentar divisor de milhar e divisor decimal formato brasileiro.


### Formatação de tipos de string para EUA

* `FormatZipCode_EUA`       : Formata a string para um ZipCode dos EUA.
* `FormatPhone_EUA`         : Formata a string para um Telefone dos EUA (Código de Área + Fone).


### Manipulação dos formatos de data

* `CleanDateFormat`         : Remove marcação especial de um "dateFormat".
* `ToString`                : Converte a instância Date para um formato string conforme informado.
* `ToDate`                  : Converte a string em um objeto Date mediante a especificação do formato.


### Funções auxiliares

* `PasswordStrength`        : Testa a força da string enquanto senha e retorna sua pontuação.


**Importante**

Tenha em mente que em algumas vezes, neste e em outros projetos **Code Craft** optou-se de forma consciênte em 
não utilizar uma ou outra *regra de otimização* dos artefatos de software quando foi percebida uma maior vantagem para
a equipe de desenvolvimento em flexibilizar tal ponto do que extritamente seguir todas as regras de otimização.


### Compatibilidade

Não é intenção deste nem de outros projetos do conjunto de soluções **Code Craft** em manter 
compatibilidade com navegadores antigos (IE8<).


________________________________________________________________________________________________________________________



## Licença

Para este e outros projetos **Code Craft** é utilizada a [Licença GNUv3](LICENCE.md).
