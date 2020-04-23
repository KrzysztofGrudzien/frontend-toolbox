import React from 'react';
import HeaderSecondary from '../../Atoms/Headers/HeaderSecondary';
import Paragraph from '../../Atoms/Paragraph/Paragraph';

const postData = {
    category: 'category',
    title: 'Our very first post',
    content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non pretium sed nullam cras vel ut consectetur fermentum, amet. Auctor vestibulum amet, suscipit enim. Ut egestas dolor proin vitae vel lacus imperdiet diam. Urna adipiscing cras tellus odio in. Cursus turpis scelerisque congue fringilla mauris at nec tincidunt. Eros massa tellus sem sit. Est porttitor lacus, lectus dui eu leo. Scelerisque arcu egestas sed tincidunt tortor. Augue rutrum enim cursus neque sit sagittis. Sit placerat integer aenean vel feugiat habitant aenean. Augue erat nisi magna pulvinar facilisi nulla. Id neque, sit tortor blandit nisi ipsum.',
    author: {
        avatar: 'https://tinyfac.es/data/avatars/7D3FA6C0-83C8-4834-B432-6C65ED4FD4C3-500w.jpeg',
        name: 'Mariusz',
    },
    postDate: '3 days ago',
    postImage:
        'https://images.unsplash.com/photo-1534665482403-a909d0d97c67?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
};

const PostPage = () => {
    const { category, title, content, author, postDate, postImage } = postData;

    return (
        <>
            <div>
                <Paragraph caption caps>
                    {category}
                </Paragraph>
                <HeaderSecondary>{title}</HeaderSecondary>
                <Paragraph secondary>{content}</Paragraph>
                <div>
                    <Paragraph caption caps>
                        {author.name}
                    </Paragraph>
                    <Paragraph caption>{postDate}</Paragraph>
                </div>
            </div>
            <img src={postImage} alt="article" />
        </>
    );
};

export default PostPage;
