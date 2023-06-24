// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
use tauri::{CustomMenuItem,SystemTrayEvent,SystemTrayMenu, SystemTrayMenuItem, SystemTray};
use tauri::{Manager, WindowBuilder};





fn main() {
    
    let show = CustomMenuItem::new("Configurar".to_string(),"Configurar");
    let quit = CustomMenuItem::new("Fechar".to_string(),"Fechar");

    
    
    let tray_menu = SystemTrayMenu::new()
    .add_item(show)
    .add_native_item(SystemTrayMenuItem::Separator)
    .add_item(quit);
    let tray = SystemTray::new().with_menu(tray_menu);
 
    tauri::Builder::default()

    .system_tray(tray)
    .on_window_event(|event| match event.event() {
        
        tauri::WindowEvent::CloseRequested {api, ..}=>{
            event.window().hide().unwrap();
            api.prevent_close();
        }
        _ =>{}
    }  )
    .on_system_tray_event(|app,event| match event{
       SystemTrayEvent::MenuItemClick{id,..}=>{
            match id.as_str(){
                               
                "Configurar"=>{
                   
                    let window = app.get_window("main").unwrap();
                  
                    window.show();
                    
                   
                 
                },
                "Fechar"=>{
                    std::process::exit(0)
                },
                _ => {}
            }
          
        }
        _ =>{}
      
    })
    
    .run(tauri::generate_context!())
    .expect("error");
    
    


        
}
