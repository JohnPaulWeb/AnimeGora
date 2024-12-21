"use client"

import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps"

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json"

const markers = [
  { coordinates: [-122.4194, 37.7749], name: "San Francisco" },
  { coordinates: [-74.006, 40.7128],  name: "New York" },
  { coordinates: [-84.3880, 33.7490], name: "Atlanta" },
  { coordinates: [-87.6298, 41.8781], name: "Chicago" },
  { coordinates: [-95.3698, 29.7604], name: "Houston" },
]

export function Mapper() {
  return (
    <div className="rounded-lg bg-gray-900/50 p-4">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">GoGora LOCATIONS</h3>
          <p className="text-3xl font-bold text-blue-400">5,186,290</p>
          <h1 className="bg-orange-500 font-bold">Welcome to GoGora</h1>
        </div>
      </div>
      <ComposableMap
        projection="geoAlbersUsa"
        projectionConfig={{
          scale: 800,
        }}
        className="h-[400px] w-full"
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#2C365E"
                stroke="#1a1f37"
                strokeWidth={0.5}
              />
            ))
          }
        </Geographies>
        {markers.map(({ coordinates, name }) => (
          <Marker key={name} coordinates={coordinates as [number, number]}>
            <circle r={4} fill="#3b82f6" />
          </Marker>
        ))}
      </ComposableMap>
    </div>
  )
}

