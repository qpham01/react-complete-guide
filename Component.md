# React Component Guide

## Component Lifecycle

### Component Life Cycle - Creation

Order of lifecycle method calls during creation.

1. Constuctor

- default ES6 class feature
- Call super(props)
- Do: Can set up initial state and properties
- Don't: Cause side effects like making API calls or other actions that can change states

2. Component

- Exist for historic reasons mainly - don't really use in applications anymore
- Do: Update state or last-minute optimization
- Don't: Cause side effects like making API calls or other actions that can change states

3. Render

- Do: Prepare and structure JSX code
- Give React an idea of what the render looks like
- Define children components
- Does not change the real DOM.

[ Render child components ]

4. ComponentDidMount

- Do: can go out to the web to get new data.
- Don't: Update state which will trigger re-render.

### Component Life Cycle - Update (triggered by parent)

Order of lifecycle method calls during update.

1. componentWillReceiveProps(nextProps)

- Do: Sync state to props
- Don't: Cause side effects or re-render

2. shouldComponentUpdate(nextProps, nextState)

- May cancel the updating process by return false
- Return false could improve performance but component display could be wrong.
- Do: Decide to continue or not
- Don't: Cause side effects

3. componentWillUpdate(nextProps, nextState)

- Do: Sync state to props
- Don't: Cause side effects

4. render()

- Prepare and structure JSX

[ Update child components ]

5. componentDidUpdate

- Do: Cause side effects
- Don't: Update state which will trigger re-render

### Component Life Cycle - Update (triggered by internal state change)

1. shouldComponentUpdate(nextProps, nextState)

- May cancel the updating process by return false
- Return false could improve performance but component display could be wrong.
- Do: Decide to continue or not
- Don't: Cause side effects

2. componentWillUpdate(nextProps, nextState)

- Do: Sync state to props
- Don't: Cause side effects

3. render()

- Prepare and structure JSX

[ Update child components ]

4. componentDidUpdate

- Do: Cause side effects
- Don't: Update state which will trigger re-render
