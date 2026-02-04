const configAbility = {
  "fileName": "1002012_Boss_Cocolia_P1_Weapon_DeathEffect",
  "skillTrigger": "PassiveSkill03",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Boss_Cocolia_P1_Weapon_DeathEffect"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Boss_Cocolia_P1_Weapon_DeathEffect",
      "execute": [
        {
          "eventTrigger": "When Put in Deathstate Limbo",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "DeathEvent_Trigger_Times",
                "compareType": "=",
                "value2": 0,
                "contextScope": "TargetEntity"
              }
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}