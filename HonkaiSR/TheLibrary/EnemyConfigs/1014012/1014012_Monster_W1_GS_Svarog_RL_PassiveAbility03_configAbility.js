const configAbility = {
  "fileName": "1014012_Monster_W1_GS_Svarog_RL_PassiveAbility03",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Create Enemies",
      "delayPercent": 0,
      "refreshPositions": false,
      "enemyList": [
        {
          "name": "Enemy Entry",
          "enemyID": 9004021,
          "locationType": "BeforeCaster"
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "modifier": "Monster_W1_Svarog_RL_Part_ListenHP_Modifier",
      "valuePerStack": {
        "PassiveAbility02_P2_HPRatio": {
          "operator": "Variables[0] ({[PassiveSkill02[0]]}) || RETURN",
          "displayLines": "{[PassiveSkill02[0]]}",
          "constants": [],
          "variables": [
            "{[PassiveSkill02[0]]}"
          ]
        }
      }
    }
  ],
  "references": []
}