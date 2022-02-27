import { Args, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql"
import { PersonModel } from "./models/person.model"
import { AliasModel } from "../alias/models/alias.model"
import { Person, Alias, Appearance } from "@prisma/client"
import { PersonService } from "./person.service"
import { AppearanceModel } from "../appearance/models/appearance.model";

@Resolver(() => PersonModel)
export class PersonResolver {
  constructor(private personService: PersonService) {
  }

  @Query(() => PersonModel, { nullable: true })
  person(@Args('id') id: number): Promise<Person | null> {
    return this.personService.findById(id)
  }


  @ResolveField(() => [AliasModel])
  aliases(@Parent() person: Person): Promise<Alias[]> {
    return this.personService.aliases(person.id)
  }

  @ResolveField(() => AliasModel, { nullable: true })
  async preferredAlias(@Parent() person: Person): Promise<Alias | null> {
    if (!person.preferredAliasId) {
      return null
    }
    return this.personService.preferredAlias(person.preferredAliasId)
  }

  @ResolveField(() => [AppearanceModel])
  appearances(@Parent() person: Person): Promise<Appearance[]> {
    return this.personService.appearances(person.id)
  }
}
