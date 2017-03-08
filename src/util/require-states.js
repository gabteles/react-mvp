const requireStates = (requireContext, initialStates) => {
  return requireContext.keys()
    .map((context) => requireContext(context).default)
    .reduce((final, cur) => final.concat(cur), initialStates);
}

export default requireStates;
