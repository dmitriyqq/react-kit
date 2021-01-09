export interface Color {
  main: string
  light?: string
  dark?: string
}

export interface Text {
  fontSize: string
  color: string
  fontWeight: string
  fontFamily: string
  textTransform: string
}

export type ColorType =
  | 'primary'
  | 'secondary'
  | 'danger'
  | 'warning'
  | 'success'

export type TextColorType =
  | 'primary'
  | 'secondary'
  | 'danger'
  | 'warning'
  | 'success'
  | 'text'

export type TextType = 'header' | 'highlight' | 'regular' | 'button' | 'label'

export interface Theme {
  name: string
  mainBackground: string
  secondaryBackground: string
  colors: {
    primary: Color
    secondary: Color
    danger: Color
    warning: Color
    success: Color
  }
  text: {
    header: Text
    highlight: Text
    regular: Text
    button: Text
    label: Text
  }
  spacing: {
    slim: string
    single: string
    double: string
    triple: string
    quadruple: string
  }
}
