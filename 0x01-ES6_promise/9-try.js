export default function guardrail(mathFunction) {
    const queue = [];
    let ans;
    try {
      ans = mathFunction();
    } catch (err) {
      ans = `Error: ${err.message}`;
    }
    queue.push(ans, 'Guardrail was processed');
    return queue;
  }