#namaste react 😊

# React notes
(normal javascript utility functions)
- useState() - Superpowerful state variable
- useEffect()

- whenever a state variable change, react re-render this component.
- react is fast in DOM manipualtions.
- react will keep sync of data layer with the ui layer.

# Conditional rendering
- rendering based on the condition is known as rendering.

- Whenever state varaible change, react trigger reconciliation cycle(re-render the components)

- Virtual reprasentation of component object(real DOM).

# useEffect 
- When the useEffect is called?
    case 1: Without dependency.
        -> After every re-render of the compenent.(without dependency error)
    case2: With dependency(Empty array):
        -> Called on initial render and just once.

    case 3: With dependency (Array is not empty)
        -> called every time when the dependency state changed.



# Pointes:
1. Never used the hooks in condtional statement, for loop and function(only used in higher level). like if statement.
2. Hooks name start with the use. example: useEffect and useRouter etc.
3. React is a single page application.


#Router:
 1. createBrowserRouter: import this from the react-router-dom. it is basically stored the list of routes in object format. it decide the behaivior of the routes.
 2. RouteProvider : it provide the route to the application or your project.
 3. You can use the <a> tag to navigate through multiple pages in react, bt it re- render the whole page. 
4. react uses the link component to navigate through mulltple pages.

# Routing in react
1. server side routing.
2. client side routing.
    we use client side routing in the react web application.


# Class components
- it extend with react.components and it has a render() method with return the jsx element.

# Life cycle:
  constructor -> render() -> ComponentDidMount() -> shouldComponentUpdate() -> 

  - ComponentDidMount()- Will use to call the APIs.

  -> #Component Updating Phase
    1. The shouldComponentUpdate(): lifecycle method
    The shouldComponentUpdate()  method is called before a component is updated. It takes two arguments: nextProps and nextState. This method returns a boolean value that determines whether the component should update or not. If this method returns true, the component will update, and if it returns false, the component will not update.
    2. componentWillUpdate() is a lifecycle method in React that gets called just before a component's update cycle starts. It receives the next prop and state as arguments and allows you to perform any necessary actions before the component updates.

# Lazy loading:(chunking, code spliting, dynamic bundling, dynamix import, on demand loading, lazy loading)
- Lazy loading in React allows you to split your code into smaller chunks, loading only the code that is needed for a particular part of your application when it is actually required. This can improve the initial loading time of your application.

- Lazy() is used to dynamically import components only when they’re needed. Suspense is a component provided by React that lets you “wait” for the dynamic import to load, showing a fallback UI in the meantime (in this case, a simple “Loading…” message).

- const Prodcuts = React.lazy(() => import("./components/products/Products"));
      <Route
        path="prodcuts"
        element={
          <React.Suspense fallback={<>...</>}>
            <Prodcuts />
          </React.Suspense>
        }
      />


# Controlled and non-controlled components
 -  Controlled components refer to the components where the state and behaviors are controlled by Parent components while Uncontrolled components are the ones having control of their own state and manage the behaviors on themselves. 

# Lifing the state up

# UseContext 

# Redux toolkit:
  1. Install @reduxjs/toolkit and react-redux
  2. create the store 
  3. connect the store with application
  4. creact slices
  5. Dispatch
  6. Reducer





