const configAbility = {
  "fileName": "2023031_Monster_XP_Elite02_02_RLElite_BattlePerformAbility",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Change Character Transformation",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "phase": "Phase1"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Monster_XP_Elite02_02_RLElite_BattlePerform_LockHP"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Monster_XP_Elite02_02_RLElite_Instance_DisableAction",
      "modifierFlags": [
        "DisableAction"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_XP_Elite02_02_RLElite_BattlePerform_LockHP",
      "execute": [
        {
          "eventTrigger": "When Put in Deathstate Limbo"
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}