type HeadingType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type FontWeightStyle =
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900';

type TextStyle =
  | 'uppercase'
  | 'capitalize'
  | 'underline'
  | 'italic'
  | 'center'
  | 'justify'
  | 'normal'
  | 'right'
  | 'left';

type ColorStyle =
  | 'white'
  | 'black'
  | 'davysGrey'
  | 'grayX11'
  | 'mayGreen'
  | 'whiteSmoke'
  | 'arsenic'
  | 'raisinBlack'
  | 'davysGrey5a'
  | 'onyx'
  | 'fernGreen'
  | 'mayGreenE3c'
  | 'taupeGray'
  | 'bdazzledBlue'
  | 'darkMossGreen'
  | 'gainsboro'
  | 'mossGreen';

type GeneralTextStyle =
  | ColorStyle
  | FontWeightStyle
  | TextStyle
  | HeadingType
  | ColorStyle;
type GeneralStyle = ColorStyle;
