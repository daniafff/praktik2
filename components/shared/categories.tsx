import { cn } from '@/lib/utils';

interface Props {
    className?: string;
}


const cats = ['Все', 'Мясные', 'Острые', 'Сладкие', 'Вегетарианские', 'С курицей', 'Еще'];

const activIndex = 0;

export const Categories: React.FC<Props> = ({ className }) => {
    return (
        <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
            {cats.map((cat, index)=>
            <a className={cn('flex items-center font-bold h-11 rounded-2xl px-5',
                activIndex === index && 'bg-white shadow-md shadow-gray-200 text-primary'   
            )}
            key={index}>
                <button> { cat } </button>
            </a>)}

        </div>
           
);
}

