import React, { Component } from 'react'

export default class Conditional_Rendering extends Component {
    constructor()
    {
        super()
        this.state=({
            show:true
        })
    }


    ToggleData=()=>{
        // alert()

        // update state
        this.setState({
            show:!this.state.show
        })


        // if(this.state.show)
        // {
        //     this.setState({
        //         show:false
        //     })
        // }
        // else
        // {
        //     this.setState({
        //         show:true
        //     })
        // }
    }
    render() {
        return (

            <>

                <button style={{padding:'20px',border:"solid 5px black"}} onClick={this.ToggleData}>Toggle Data</button>

                {/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla culpa dolorum, libero optio, placeat quam repellat at necessitatibus eum deserunt nostrum iste reiciendis nisi, velit nobis itaque molestiae laborum nesciunt mollitia consequuntur vero dignissimos expedita. Nobis laborum atque rerum iusto necessitatibus culpa quidem impedit facilis illum ea minus assumenda, accusantium quis voluptatum earum ratione aperiam quibusdam animi, consequatur velit possimus odit sed iste nulla. Assumenda doloremque perspiciatis dolorum quas blanditiis repudiandae iure consectetur, vitae cum, ducimus dignissimos ad quam laborum consequatur vel eligendi unde deserunt nemo! Placeat, odio voluptatem, adipisci est aspernatur suscipit labore reiciendis fugit odit quisquam mollitia necessitatibus, cumque cum debitis sapiente in. Molestias eos tenetur laboriosam quae deserunt ipsa nisi blanditiis quis labore odio est et repellendus aut exercitationem fugit, tempore magni error at nemo id, vero neque dicta, sint mollitia! Alias, dignissimos. Nam recusandae aperiam necessitatibus molestiae, fugiat doloribus reprehenderit laudantium totam laborum, fuga, cupiditate repudiandae. Laborum aliquid consequuntur sed laboriosam eligendi id, deleniti vero quam, quod recusandae suscipit fuga cupiditate facilis molestiae ab aperiam ad libero voluptate! Voluptates esse sequi voluptas animi repellendus eos rerum velit, itaque, magni, odit officia quo inventore praesentium exercitationem! Sit, mollitia corporis. Ipsum ullam amet sed, culpa et ratione laborum pariatur voluptatum, consequuntur neque dolorem odio nisi libero enim nesciunt officia laudantium? Provident earum nostrum quisquam molestiae tempora, iure enim ab, odit beatae laborum quasi hic perspiciatis tempore nisi veritatis placeat reiciendis ipsam blanditiis maiores sit ipsum eos repudiandae quod eaque. Similique vitae autem, labore ut provident pariatur in impedit? Voluptatem in laudantium ab, hic quo modi quia nobis iusto aperiam velit animi nam laborum sit! Officiis blanditiis ad debitis expedita, voluptatem cupiditate, dolore dolores error similique magnam iste sequi id. Nihil omnis mollitia ducimus laborum enim, laudantium officiis est aspernatur eius amet rem praesentium. Minus earum recusandae, asperiores qui debitis modi, consequatur quasi ipsa commodi doloremque minima nam nisi laborum voluptas. Similique voluptas doloribus magnam odit obcaecati. Fugit corporis vitae iure, fugiat cum quibusdam a quos consectetur tempore amet atque itaque laboriosam facilis adipisci beatae maiores asperiores ad. Reiciendis sint porro doloremque laborum alias illo voluptas excepturi similique quod dolore quam quos culpa distinctio ducimus ad obcaecati ea, eaque nesciunt molestias iure accusamus iusto facere minus! Dolorem, alias laborum, deleniti dolorum fugit pariatur maxime consequatur rerum, vero mollitia beatae saepe nulla ipsum explicabo eaque veritatis. Alias totam aut cupiditate sit, quam eius porro natus sint voluptatibus recusandae odio, adipisci officia autem ex, esse ratione. Dolores unde accusamus, atque pariatur corporis id nostrum, dolorem aspernatur odit nam quasi, adipisci laborum ipsa placeat itaque iure maiores quam consectetur animi. Debitis dolor voluptate voluptatum ipsum explicabo eligendi nam provident, quibusdam quis quisquam quam cupiditate a hic tempore illo saepe ullam reprehenderit similique minus illum sequi velit. Voluptatem, delectus impedit sapiente ab deleniti nesciunt consequatur, assumenda adipisci aliquid quaerat hic explicabo nulla eveniet quod animi ratione accusantium rem ipsum amet dolorum expedita voluptate nam? Voluptatum vel earum, nostrum non praesentium beatae dolorem sit. Labore amet dolore inventore nesciunt eos ipsum at voluptates dolorum.</p> */}


                {/* conditional rendering- render something based on. conditions */}

                {/* if else / ternary operator / logical && / switch */}

                {/* if() {} else {} */}

                {/* ternary op-      condition ? "if true" : "if false" */}

                {/* logical && -    condition &&  'if true ' */}


                {
                   this.state.show ? "hello welcome" : "" 
                }
            </>

        )
    }
}
