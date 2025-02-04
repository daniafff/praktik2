import { Container } from './container';
import { cn } from '@/lib/utils';
import * as React from 'react';
import Image from 'next/image';

import { Search } from 'lucide-react';

interface Props {
    className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
    return (
        <header className={cn('border border-b', className)}>
            <Container className='flex items-center justify-between py-8'>
                <div className='flex item-center gap-4'>
                    <Image
                        src='/logo-pizza.svg'
                        alt='Логотип NEXT PIZZA'
                        width={66} // Укажите ширину изображения
                        height={96} // Укажите высоту изображения
                        className='h-auto' // Можно добавить класс для управления стилями
                    />
                    <div>
                        <h1  className='text-sm font-black uppercase text-2xl' >NEXT PIZZA
                        </h1>
                        <div className='font-normal text-base'>вкусней уже некуда</div>
                    </div>
                    <div className=''>
                    <input className='w-[756px] h-[40px]' type="text" />
                    <Search className='lupa'/>
                    </div>
                </div>
            </Container>
        </header>
    );
}