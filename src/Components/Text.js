import styled, { withTheme } from "styled-components"

const Text = styled.p`
color: ${({ theme, color = 'primary' }) => theme.color[color]};
font-size: ${({ theme, size = 's' }) => theme.typographySizes[size].size}
line-height: ${({ theme, size = 's' }) => theme.typographySizes[size].line}; 
`
export default withTheme(Text)