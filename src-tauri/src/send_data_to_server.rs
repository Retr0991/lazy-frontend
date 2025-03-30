use crate::models::Data;
use reqwest::Client;
use tauri_plugin_geolocation::{Position, GeolocationExt};

pub async fn send_data_to_server(data: Data) -> Result<(), String> {
    let client = Client::new();

    let response = client
        .post("https://cdb7-2409-40e5-9c-81dc-267-9bae-bbaf-bda.ngrok-free.app")
        .json(&data)
        .send()
        .await
    .map_err(|e| e.to_string())?;

    if response.status().is_success() {
        Ok(())
    } else {
        Err(format!(
            "Failed to send data. Status: {}",
            response.status()
        ))
    }
}

pub async fn get_location(app_handle: &tauri::AppHandle) -> Result<Position, String> {
    app_handle.geolocation()
        .get_current_position(None)
        .map_err(|e| e.to_string())
}