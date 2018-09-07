import React from 'react';
import Article from './Article.jsx';

function ArticleList() {

  var masterArticleList = [
    {
      title: '7 Reasons Why White People Should Not Wear Black Hairstyles',
      photoPath: '../assets/images/hairstyles.png',
      url: 'https://everydayfeminism.com/2015/07/white-people-black-hairstyles/',
      category: [
        'today',
        'month',
        'week'
      ]
    },
    {
      title: '3 Differences Between the Terms ‘Gay’ and ‘Queer’ — and Why It Matters',
      photoPath: '../assets/images/gayqueer.jpg',
      url: 'https://everydayfeminism.com/2016/03/difference-between-gay-queer/',
      category: [
        'today', 'month', 'week'
      ]
    },
    {
      title: '10 Ways to Avoid Everyday Ableism',
      photoPath: '../assets/images/ableism.jpg',
      url: 'https://everydayfeminism.com/2013/10/avoid-everyday-ableism/',
      category: [
        'today'
      ]
    },
    {
      title: 'Intent vs. Impact: Why Your Intentions Don’t Really Matter',
      photoPath: '../assets/images/intent.jpg',
      url: 'https://everydayfeminism.com/2013/07/intentions-dont-really-matter/',
      category: [
        'today',
        'week'
      ]
    },
    {
      title: 'Meet the 5 Black Trans and Gender Variant Artists from the Global South Who are Revolutionizing Fashion, Music, and Visual Art',
      photoPath: '../assets/images/transartists.jpg',
      url: 'https://everydayfeminism.com/2018/08/black-trans-gender-variant-artists-global-south/',
      category: [
        'latest'
      ]
    },
    {
      title: 'White People: This Is How To Check Your Privilege When Asking People of Color For Their Labor',
      photoPath: '../assets/images/privilege.jpg',
      url: 'https://everydayfeminism.com/2018/07/white-people-this-is-how-to-check-your-privilege-when-asking-people-of-color-for-their-labor/',
      category: [
        'latest'
      ]
    },
    {
      title: 'Here Are 7 Reasons Why Polyamory Is More Difficult When You’re Disabled',
      photoPath: '../assets/images/disabledpoly.jpg',
      url: 'https://everydayfeminism.com/2018/07/polyamory-difficult-disabled/',
      category: [
        'latest'
      ]
    },
    {
      title: 'First It Was All About Diversity, Then Inclusion. Here’s Why Neither Of Those Are Enough',
      photoPath: '../assets/images/diversity.jpg',
      url: 'https://everydayfeminism.com/2018/07/diversity-inclusion-neither-are-enough/',
      category: [
        'latest'
      ]
    },
    {
      title: '3 Ways Men Wanting to ‘Focus On Her Pleasure’ During Sex Can Still Be Sexist',
      photoPath: '../assets/images/sexist.jpg',
      url: 'https://everydayfeminism.com/2015/12/focusing-on-her-pleasure/',
      category: [
        'month'
      ]
    },
    {
      title: '5 Things to Do (And Not Do) to Support Someone with Depression',
      photoPath: '../assets/images/depression.jpg',
      url: 'https://everydayfeminism.com/2015/03/supporting-people-with-depression/',
      category: [
        'month'
      ]
    }
  ];

  return (
    <div>
      {masterArticleList.map((article, index) =>
        <Article title={article.title}
          photoPath={article.photoPath}
          url={article.url}
          category={article.category}
          key={index} />
      )}
    </div>
  );
}

export default ArticleList;
