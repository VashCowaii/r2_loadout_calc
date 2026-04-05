const configAbility = {
  "fileName": "60018_MissionBattleEvent60018_Ability03_Part01",
  "childAbilityList": [
    "60018_MissionBattleEvent60018_Ability03_Part01"
  ],
  "skillTrigger": "SkillP01",
  "abilityType": "Talent",
  "toughnessList": null,
  "parse": [],
  "whenAdded": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1616458391\">MStageMissionBattleEvent60018</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1616458391\">MStageMissionBattleEvent60018</a>",
      "modifierFlags": [
        "BlockDamage",
        "Stealth"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Add Ability",
              "abilityName": "MissionBattleEvent60018_Insert_Part01"
            },
            {
              "name": "Add Ability",
              "abilityName": "MissionBattleEvent60018_Ability03_Camera"
            }
          ]
        },
        {
          "eventTrigger": "Got a Kill [Owner]"
        },
        {
          "eventTrigger": "Entity Created [Anyone]"
        },
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            "Deleted bullshit",
            {
              "name": "Inject Ability Use",
              "abilityName": "MissionBattleEvent60018_Insert_Part01",
              "abilitySource": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "abilityTarget": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "priorityTag": "STAGE_Character",
              "canHitNonTargets": true,
              "allowAbilityTriggers": false
            }
          ],
          "priorityLevel": -90
        },
        {
          "eventTrigger": "Leave Battle"
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ],
  "targetObjectData": {
    "primaryTarget": "Inherent Target"
  },
  "realTargetData": {
    "primaryTarget": "{{Caster}}"
  }
}