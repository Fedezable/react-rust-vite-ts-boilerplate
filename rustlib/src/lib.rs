use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern {
    pub fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet(message: &str) {
    alert(&format!("Hello from Rust, {message}"));
}