function getArgument(arg) {
  if (!/^((--count)|(--filter=([a-zA-Z ]+)))$/.test(arg)) {
    throw new Error(
      "Argument is required and should be --count or --filter=<your filter>"
    );
  }

  return arg.split("=");
}

module.exports = getArgument;
