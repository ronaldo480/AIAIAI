'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function About() {
    return (
        <div className="min-h-screen bg-black text-white">
            <header className="bg-black border-b border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center">
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">FASHION CLOSET</h1>
                    <nav>
                        <ul className="flex space-x-8">
                            <li><Link href="/" className="text-gray-300 hover:text-white transition-colors">HOME</Link></li>
                            <li><Link href="/about" className="text-white">ABOUT</Link></li>
                            <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">CONTACT</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>

            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="bg-gray-900 rounded-2xl shadow-xl p-8">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">About Fashion Closet</h2>

                    <div className="space-y-6 text-gray-300">
                        <p className="leading-relaxed">
                            Fashion Closet은 당신의 개인 스타일을 더욱 쉽고 효율적으로 관리할 수 있도록 도와주는 디지털 패션 관리 서비스입니다.
                        </p>

                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-white">주요 기능</h3>
                            <ul className="list-disc list-inside space-y-2">
                                <li>AI 기반 맞춤형 코디 추천</li>
                                <li>계절별 의류 관리</li>
                                <li>드래그 앤 드롭 코디네이션</li>
                                <li>직관적인 UI/UX</li>
                                <li>실시간 의류 검색</li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-white">기술 스택</h3>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Next.js 14</li>
                                <li>React</li>
                                <li>Tailwind CSS</li>
                                <li>TypeScript</li>
                                <li>AI/ML 통합</li>
                            </ul>
                        </div>

                        <div className="pt-6">
                            <Link href="/">
                                <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold rounded-xl transition-all transform hover:scale-105">
                                    시작하기
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
} 