use models::{Data, GeoData};
use send_data_to_server::{get_location, send_data_to_server};
use chrono::DateTime;

pub mod models;
pub mod send_data_to_server;

// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
// #[tauri::command]
// fn greet(name: &str) -> String {
//     format!("Hello, {}! You've been greeted from Rust!", name)
// }

#[tauri::command]
async fn do_stuff(app_handle: tauri::AppHandle) -> String {
    let locaction_data = match get_location(&app_handle).await {
        Ok(position) => position,
        Err(err) => {
            println!("Error: {}", err);
            println!("Failed to get location: {}", err);
            return format!("Failed to get location: {}", err);
        },
    };
    
    let data = Data {
        data_type: "location_update".to_string(),
        geo_data: Some(GeoData {
            lat: locaction_data.coords.latitude.to_string(),
            lon: locaction_data.coords.longitude.to_string(),
        }),
        api_key: Some("loda".to_string()),
        timestamp: match DateTime::from_timestamp(locaction_data.timestamp as i64, 0) {
            Some(datetime) => datetime,
            None => {
                return format!("Invalid timestamp");
            },
        },
    };

    match send_data_to_server(data).await {
        Ok(_) => format!("Success"),
        Err(err) => format!("Error: {}", err),
    }
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .plugin(tauri_plugin_geolocation::init())
        .invoke_handler(tauri::generate_handler![do_stuff])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
