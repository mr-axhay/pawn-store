import { useNavigate } from 'react-router-dom';
import { __categoryapiurl } from '../API_URL';
import Button from './Button';

function Categories() {

    const navigate = useNavigate();

    const addCategory = () => {
        //navigate to add categ
        navigate('/addCategory');
    }

    return (
        <>
            <div id="tooplate_content">

                <div className="content_box content_box_last">

                    <h2>Categories!!!</h2>
                    <Button
                        id="category-button"
                        title="Add Category"
                        onClick={addCategory}
                        containerClass="bg-blue-50 md:flex hidden items-center justify-center gap-1"
                    />

                </div>

                <div className="cleaner"></div>
            </div>
        </>
    );
}

export default Categories;
