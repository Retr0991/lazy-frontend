use serde::{Deserialize, Serialize};
use chrono::{DateTime, Utc};

#[derive(Serialize, Deserialize, Debug)]
pub struct GeoData {
    pub lat: String,
    pub lon: String,
}


#[derive(Serialize, Deserialize, Debug)]
pub struct Data {
    pub data_type: String,
    pub geo_data: Option<GeoData>,
    pub api_key: Option<String>,
    pub timestamp: DateTime<Utc>,
}
