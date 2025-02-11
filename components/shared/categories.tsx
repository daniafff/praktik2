import { cn } from '@/lib/utils';

interface Props {
    className?: string;
}


const cats = ['Все', 'Мясные', 'Острые', 'Сладкие', 'Вегетарианские', 'С курицей', 'Еще'];

const activIndex = 0;

export const Categories: React.FC<Props> = ({ className }) => {
    return (
        <div className={cn('border border-b ', className)}>
            {cats.map((cat, index)=>
            <a className={cn('border border-b',
                activIndex === index&&''   
            )}
            key={index}>
                <button> { cat } </button>
            </a>)}

        </div>
           
);
}

