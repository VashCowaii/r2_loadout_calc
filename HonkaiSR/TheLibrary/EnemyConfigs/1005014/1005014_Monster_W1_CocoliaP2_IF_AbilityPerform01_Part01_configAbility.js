const configAbility = {
  "fileName": "1005014_Monster_W1_CocoliaP2_IF_AbilityPerform01_Part01",
  "childAbilityList": [
    "1005014_Monster_W1_CocoliaP2_AbilityPerform01_Camera",
    "1005014_Monster_W1_CocoliaP2_IF_AbilityPerform01_Part01",
    "1005014_Monster_W1_CocoliaP2_IF_AbilityPerform01_Part02"
  ],
  "skillTrigger": "SkillPerform01",
  "abilityType": "Skill",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1652958361\">Monster_W1_Cocolia_IF_RevertSimulationSpeed</a>"
    },
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Monster_W1_CocoliaP2_IF_AbilityPerform01_Part02"
    },
    "Deleted bullshit"
  ],
  "whenAdded": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-313787691\">Enemy_W1_CocoliaP2_IF_Battle2Invisible</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-313787691\">Enemy_W1_CocoliaP2_IF_Battle2Invisible</a>",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}