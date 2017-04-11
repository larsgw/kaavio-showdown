# Writers
Kaavio Showdown allows you to create interactive descriptions that accompany a Kaavio diagram. These descriptions 
contain interactive links that, when clicked, change the visualisation of the diagram. For example, you can highlight and zoom in on
diagram elements. A demo of the kind of descriptions you can achieve is available 
[here](https://jacobwindsor.github.io/jcbwndsr/interactive-descriptions.html).

## Standard Markdown syntax
Before starting you should be familiar with Markdown. It is a text-to-html conversion tool for the web that allows you 
to write in an easy-to-understand plain text format. This means you can easily create headings, lists, tables, inline images etc.

Learn the Markdown syntax [here](https://daringfireball.net/projects/markdown/syntax).

## Basic syntax
The syntax to create interactive links is similar between all operations. Details on all of the operations and the 
specific syntax is available further down.

```markdown
[some text]!!operation 'param1' 'param2' 'param3'!!
```

This would render a link that looks like this: [some text]().

Just remember that you wrap the text you want to be linked in square brackets and the operation details in double 
exclamation marks.

In most of the operations param1 is the `entity list`. This is a list of comma separated list of entity IDs. You should
be able to get the entity IDs from the application you're writing in. If not, then ask your developer.

## Operations
### toggleHighlight
```markdown
[some text]!!toggleHighlight 'entity list' 'color' 'resets'!!
```
- `entity list` is the list of comma separated entity IDs.
- `color` is any CSS color. It's easiest to just use something like 'red' or 'blue'.
- `resets` is a comma separated list of what should be reset *before* highlighting. You can use the following:
  - `others` will un-highlight all entities not set in `entity list`
  - `panZoom` will reset both the pan and the zoom and center the diagram.
  - `hidden` will show any entities that are hidden.
  
**E.g.**
```markdown
[my sample]!!toggleHighlight 'abc,def' 'red' 'others,hidden'!!
```
Will create a link like [my sample](). When clicked this would toggle the highlighting of entities with the IDs `abc`
and `def`, coloring them red. If any other entities are highlighted then it will reset them first. It will also show any 
any hidden elements first.
  
### highlightOn
```markdown
[some text]!!highlightOn 'entity list' 'color' 'resets'!!
```
All parameters the same as toggleHighlight.

### highlightOff
```markdown
[some text]!!highlightOff 'entity list' 'resets'!!
```
All parameters the same as toggleHighlight except for color.

### resetHighlighted
```markdown
[some text]!!resetHighlighted!!
```

### hide
```markdown
[some text]!!hide 'entity list' 'resets'!!
```
- `entity list` is the list of comma separated entity IDs.
- `resets` is a comma separated list of what should be reset *before* highlighting. You can use the following:
  - `others` will show all entities not set in `entity list`
  - `panZoom` will reset both the pan and the zoom and center the diagram.
  - `highlighted` will un-highlight all highlighted entities.
  
### show
```markdown
[some text]!!show 'entity list' 'resets'!!
```
All parameters are the same as hide.

### toggleHidden
```markdown
[some text]!!toggleHidden 'entity list' 'resets'!!
```
All parameters are the same as hide.

### resetHidden
```markdown
[some text]!!resetHidden!!
```

### zoomOn
```markdown
[some text]!!zoomOn 'entity list' 'resets'!!
```

- `entity list` is a comma separated list of entity IDs.
- `resets` is a comma separated list of what should be reset *before* highlighting. You can use the following:
  - `hidden` will show all hidden entities
  - `highlighted` will un-highlight all highlighted entities.
  
### panTo
```markdown
[some text]!!panTo 'entity list' 'resets'!!
```

- `entity list` is a comma separated list of entity IDs.
- `resets` is a comma separated list of what should be reset *before* highlighting. You can use the following:
  - `hidden` will show all hidden entities
  - `highlighted` will un-highlight all highlighted entities.
  - `panZoom` will reset the pan and zoom.

### resetPanZoom
This will reset the zoom to the original zoom level and center the diagram.
```markdown
[some text]!!resetPanZoom!!
```
