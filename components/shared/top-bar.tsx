import { cn } from '@/lib/utils';
import { ArrowUpDown } from 'lucide-react';
import { Categories, Container, SortPopup } from '@/components/shared/';


interface Props {
    className?: string;
}

export const TopBar: React.FC<Props> = ({ className }) => {
    return (
        
        <div className={cn('stikcky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10', className)}>
            <Container>
                <Categories>
                    </Categories>
                    <SortPopup/></Container> </div>
    );
}