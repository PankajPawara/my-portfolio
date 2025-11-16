import React from 'react'
import { FaCalendarAlt, FaExternalLinkAlt } from 'react-icons/fa'
import { MdSchool } from 'react-icons/md'

const CertificateCard = ({ item }) => {
    return (
        <div className="bg-gray-800 rounded-xl shadow-lg border border-gray-700 transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(147,51,234,0.8)]">
            <img src={`/${item.img}.png`} alt={item.title} className=' w-full overflow-hidden h-contain p-2 rounded-t-xl'></img>
            <div className="relative flex items-start gap-4 px-6 py-4 pt-2">
                {/* Badge Image (if available) */}
                {item.badge && (
                    <img
                        src={item.badge}
                        alt="Badge"
                        className="absolute -top-8 right-0 h-16 md:h-20 lg:h-24"
                    />
                )}

                <div className=" flex-1">
                    <h2 className="text-xl font-bold text-purple-400">{item.title}</h2>
                    <p className="text-gray-300 mt-1 flex items-center gap-2">
                        <MdSchool /> {item.issuer}
                    </p>

                    <p className="text-gray-400 mt-2 text-sm flex items-center gap-2">
                        <FaCalendarAlt /> {item.from} → {item.to} ({item.duration})
                    </p>

                    <span className="text-xs mt-1 px-2 py-1 bg-purple-600 rounded-md inline-block">
                        {item.mode}
                    </span>

                    <div className="mt-4 flex gap-3 flex-wrap justify-end">
                        {/* View Certificate */}
                        <a
                            href={item.url}
                            target="_blank"
                            className="px-4 py-2 bg-purple-600 rounded-lg text-white flex items-center gap-2 hover:bg-transparent transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_3px_rgba(147,51,234,0.8)]"
                        >
                            View Certificate
                            <FaExternalLinkAlt size={14} />
                        </a>

                        {/* Proof / Badge */}
                        {item.proof && (
                            <a
                                href={item.proof}
                                target="_blank"
                                className="px-4 py-2 border border-purple-400 text-purple-300 rounded-lg flex items-center gap-2 hover:bg-purple-600 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_3px_rgba(147,51,234,0.8)]"
                            >
                                Proof
                                <FaExternalLinkAlt size={14} />
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CertificateCard
