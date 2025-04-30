(module
 (type $0 (func (param f64) (result f64)))
 (memory $0 0)
 (export "a" (func $../examples/custom/my-examples/console_output/console_compilable/a))
 (export "memory" (memory $0))
 (func $../examples/custom/my-examples/console_output/console_compilable/a (param $0 f64) (result f64)
  local.get $0
  local.get $0
  f64.add
 )
)
