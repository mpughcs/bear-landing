import React from 'react'

export default function AdvertiserThumbnail({advertiser}) {
  return (
    <div className="flex flex-col items-center gap-2">
      <img src={advertiser.image} alt={advertiser.name} className="min-h-[100px] p-2 min-w-[100px] object-scale-down bg-white" />
      <p className="text-lg font-bold">{advertiser.name}</p>
    </div>
  )
}
