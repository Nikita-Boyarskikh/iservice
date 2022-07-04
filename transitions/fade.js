import { Transition } from 'react-transition-group'

const Fade = ({ trigger, children, duration = 300 }) => {
  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 1,
    visibility: 'visible',
  }

  const styleByState = {
    entered: {},
    entering: {},
    exiting: {
      opacity: 0,
    },
    exited: {
      opacity: 0,
      visibility: 'hidden',
    }
  };

  return (
    <Transition in={trigger} timeout={duration}>
      {(state) => (
        <div style={{
          ...defaultStyle,
          ...styleByState[state],
        }}>
          {children}
        </div>
      )}
    </Transition>
  )
}

export default Fade
