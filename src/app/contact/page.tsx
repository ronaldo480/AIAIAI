'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function Contact() {
    return (
        <div className="min-h-screen bg-black text-white">
            <header className="bg-black border-b border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center">
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">FASHION CLOSET</h1>
                    <nav>
                        <ul className="flex space-x-8">
                            <li><Link href="/" className="text-gray-300 hover:text-white transition-colors">HOME</Link></li>
                            <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">ABOUT</Link></li>
                            <li><Link href="/contact" className="text-white">CONTACT</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>

            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="bg-gray-900 rounded-2xl shadow-xl p-8">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Contact Us</h2>

                    <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold text-white">문의하기</h3>
                                <p className="text-gray-300">
                                    서비스 이용 중 궁금한 점이나 제안사항이 있으시다면 언제든지 문의해 주세요.
                                    빠른 시일 내에 답변 드리도록 하겠습니다.
                                </p>
                                <div className="space-y-2">
                                    <p className="text-gray-300">
                                        <span className="text-white font-medium">이메일:</span> sdw1013@kentech.ac.kr
                                    </p>
                                    <p className="text-gray-300">
                                        <span className="text-white font-medium">운영시간:</span> 평일 09:00 - 18:00
                                    </p>
                                </div>
                            </div>

                            <form className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">이름</label>
                                    <Input
                                        id="name"
                                        type="text"
                                        className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                                        placeholder="이름을 입력해주세요"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">이메일</label>
                                    <Input
                                        id="email"
                                        type="email"
                                        className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                                        placeholder="이메일을 입력해주세요"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">메시지</label>
                                    <Textarea
                                        id="message"
                                        className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 min-h-[120px]"
                                        placeholder="문의사항을 입력해주세요"
                                    />
                                </div>
                                <Button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold rounded-xl transition-all transform hover:scale-105"
                                >
                                    보내기
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
} 