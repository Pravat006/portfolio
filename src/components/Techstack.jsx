import React from 'react'
import portfolioData from '@/data/portfolioData.json'
import { Card, CardContent } from "@/components/ui/card"

function Techstack() {
    const { icons } = portfolioData;

    return (
        <div className='w-full'>
            <div className="grid grid-cols-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {icons.map((icon) => (
                    <Card
                        key={icon.id}
                        className="p-4 bg-white/10  border-white/20 hover:bg-white/15 transition-all duration-300 group shadow-xl"
                    >
                        <CardContent className="p-0 flex flex-col items-center justify-center">
                            <div className="h-10 sm:h-16 w-16 mb-3 relative flex items-center justify-center">
                                <img
                                    loading='lazy'
                                    src={icon.src}
                                    alt={icon.tooltip}
                                    className={`h-12 w-12 object-contain transition-all duration-300 group-hover:scale-110 ${icon.isSpinning ? 'animate-spin-slow' : ''}`}
                                />
                            </div>
                            <span className="text-sm text-center font-medium text-gray-700 dark:text-gray-200">{icon.tooltip}</span>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default Techstack