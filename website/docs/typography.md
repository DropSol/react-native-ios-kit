---
id: typography
title: Typography
---
import useBaseUrl from '@docusaurus/useBaseUrl';

Basic typography components.

<img alt="Typography component " src={useBaseUrl('img/typography.png')} />

### Example usage:
```jsx
<Title1>Title 1</Title1>
<Title2>Title2</Title2>
<Title3>Title3</Title3>
<Headline>Headline</Headline>
<Body>Body</Body>
<Callout>Callout</Callout>
<Subhead>Subhead</Subhead>
<Footnote>Footnote</Footnote>
<Caption1>Caption1</Caption1>
<Caption2>Caption2</Caption2>
```

## Typography Components:
 - `Title1`
 - `Title2`
 - `Title3`
 - `Headline`
 - `Body`
 - `Callout`
 - `Subhead`
 - `Footnote`
 - `Caption1`
 - `Caption2`

## Theme
Uses following `theme` properties:
 - `textColor` - color of text

## Props of every typography component

### `style` (optional)
**type:** `Object`  

Custom styles to apply to the typography component.

### `theme` (optional)
**type:** [`Theme`](theme)

Custom theme for component. By default provided by the ThemeProvider.
