const configAbility = {
  "fileName": "Hook_Modifiers",
  "abilityType": "Char. Modifiers",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "parse": [
    {
      "name": "Modifier Construction",
      "for": "Hook_BPAbilityAlter_Enable[<span class=\"descriptionNumberColor\">Enhanced Skill</span>]",
      "counter": 1,
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Update Ability Binding",
              "target": "Caster",
              "abilityName": "Skill02",
              "skillSlot": "Skill",
              "enableSecondaryType": "ControlSkill02"
            },
            {
              "name": "Update Ability Enhance Button",
              "target": "Owner of this Modifier",
              "display": "Hide",
              "abilityName": "Skill"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Update Ability Binding",
              "target": "Caster",
              "abilityName": "Skill21",
              "skillSlot": "Skill",
              "enableSecondaryType": "ControlSkill02"
            },
            {
              "name": "Update Ability Enhance Button",
              "target": "Owner of this Modifier",
              "display": "Show",
              "abilityName": "Skill"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "description": "Enhances the next Skill and changes it to a Blast attack.",
      "type": "Other",
      "effectName": "Enhanced Skill",
      "statusName": "Enhanced Skill"
    }
  ],
  "references": []
}